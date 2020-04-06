import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../models/contact.model';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  serviceUrl: string = 'https://my-json-server.typicode.com/mkorbar/backend-contact-form/users';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.serviceUrl, httpOptions);
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.serviceUrl, contact, httpOptions);
  }

  deleteContact(contact: Contact): Observable<Contact> {
    const deleteUrl = `${this.serviceUrl}/${contact.id}`;
    return this.http.delete<Contact>(deleteUrl, httpOptions);
  }
}
