import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  standalone: true,
  selector: 'app-upload',
  imports: [CommonModule], // ✅ Include here
  templateUrl: './upload.component.html',
})
export class UploadComponent {
  text = '';
  summary = '';

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Call your API service here (to be added)
    }
  }
}
