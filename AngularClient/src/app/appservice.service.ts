import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppserviceService {

 private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  getAddress(id: number): Observable<any> {
  let username='VST';
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user:VST') });
    return this.http.get(`${this.baseUrl}/address/${id}`,{headers});
  }

  createAddress(address: Object): Observable<Object> {
  let username='VST';
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user:VST') });
    return this.http.post(`${this.baseUrl}/address`, address,{headers});
  }

  updateAddress(id: number, value: any): Observable<Object> {
  let username='VST';
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user:VST') });
    return this.http.put(`${this.baseUrl}/address/${id}`, value,{headers});
  }

  deleteAddress(id: number): Observable<any> {
  let username='VST';
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user:VST') });
    return this.http.delete(`${this.baseUrl}/address/${id}`, { responseType: 'text' });
  }

  getAddressList(): Observable<any> {
  let username='VST';
   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user:VST') });
    return this.http.get(`${this.baseUrl}/address`,{headers});
  }
}
