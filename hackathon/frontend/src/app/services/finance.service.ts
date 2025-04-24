import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FinanceService {
  private baseUrl = 'http://127.0.0.1:8000'; // FastAPI running locally

  constructor(private http: HttpClient) {}

  addManualExpense(expense: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/manual-expense`, expense);
  }

  getSummary(userId: string): Observable<any> {
    const params = new HttpParams().set('user_id', userId);
    return this.http.get(`${this.baseUrl}/summary`, { params });
  }

  chatWithBot(payload: { user_id: string; question: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/chat`, payload);
  }
}
