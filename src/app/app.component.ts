import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lawyer-app';
  caseDescription: string = '';

  constructor(private http: HttpClient) {}
  onSubmit() {
    const caseData = { description: this.caseDescription };
    this.http.post(environment.urlApi, caseData).subscribe(response => {
      console.log('Case submitted', response);
    });
  }
}
