import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('http://www.mocky.io/v2/5cd234d13100005f0033964e');
  }

}
