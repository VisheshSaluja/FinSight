import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-upload',
  imports: [CommonModule, FormsModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  text = '';
  summary = '';
  uploading = false;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploading = true;
      const formData = new FormData();
      formData.append('file', file);

      this.http.post<any>('http://localhost:8000/upload', formData).subscribe(
        (res) => {
          this.text = res.text;
          this.http.post<any>('http://localhost:8000/summarize', { text: this.text }).subscribe(
            (sumRes) => {
              this.summary = sumRes.summary;
              this.uploading = false;
            },
            (err) => {
              console.error(err);
              this.uploading = false;
            }
          );
        },
        (err) => {
          console.error(err);
          this.uploading = false;
        }
      );
    }
  }
}