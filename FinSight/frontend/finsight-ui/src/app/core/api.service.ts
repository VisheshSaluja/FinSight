import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private BASE_URL = 'http://localhost:8000'; // Change to Cloud Run URL when deployed

  constructor(private http: HttpClient) {}

  uploadPDF(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.BASE_URL}/upload`, formData);
  }

  summarizeText(text: string) {
    return this.http.post(`${this.BASE_URL}/summarize`, { text });
  }

  compareBudget(actual: any, planned: any) {
    return this.http.post(`${this.BASE_URL}/compare-budget`, { actual, planned });
  }

  chat(history: string[], question: string) {
    return this.http.post(`${this.BASE_URL}/chat`, { history, question });
  }
}
