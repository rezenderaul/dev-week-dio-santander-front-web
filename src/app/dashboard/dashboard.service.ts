import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'https://dev-week-dio-santander.herokuapp.com/bootcamp';

  constructor(private http: HttpClient) { }

  async getStock(): Promise<Stock[]> {
    const url = '/stocks';
    return this.http.get<Stock[]>(`${this.baseUrl}/stocks`).toPromise();
  }
}
