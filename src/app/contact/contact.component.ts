// filepath: /c:/Users/JOHND/lawyer-app/src/app/contact/contact.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const contactData = { name: this.name, email: this.email, message: this.message };
    this.http.post(environment.urlApi, contactData).subscribe(response => {
      console.log('Mensaje enviado', response);
    });
  }
}