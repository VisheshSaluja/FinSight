import { Component, OnInit } from '@angular/core';
import { FinanceService } from './services/finance.service';

@Component({
  selector: 'app-root',
  template: `<h1>Check the console</h1>`
})
export class AppComponent implements OnInit {
  constructor(private financeService: FinanceService) {}

  ngOnInit() {
    this.financeService.getSummary('test_user_001').subscribe({
      next: (data) => console.log('✅ Summary:', data),
      error: (err) => console.error('❌ Error:', err)
    });
  }
}
