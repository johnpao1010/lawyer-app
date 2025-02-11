import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-case-form',
  templateUrl: './case-form.component.html',
  styleUrls: ['./case-form.component.css']
})
export class CaseFormComponent {
  caseDescription: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const caseData = { description: this.caseDescription };
    this.http.post('http://localhost:3000/api/cases', caseData).subscribe(response => {
      console.log('Case submitted', response);
    });
  }
}