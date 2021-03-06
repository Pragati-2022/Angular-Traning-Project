import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  _baseUrl = 'https://reqres.in/api/products';

  constructor(private http: HttpClient) {}

  getProduct(id?: number) {
    if (id) {
      return this.http.get<any>(`${this._baseUrl}/${id}`);
    }
    
    return this.http.get<any>(this._baseUrl);
  }
}
