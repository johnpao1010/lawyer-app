import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formData = {
    nombre: '',
    email: '',
    telefono: '',
    caso: '',
    acceptTerms: false 
  };
  urlApi = environment.urlApi;
   message: string = '';
   isError: boolean = false;
  constructor(private router: Router,private http: HttpClient) {}
  
  ngOnInit() {
    this.incrementCounter(1530);
  }

  incrementCounter(target: number) {
    let count = 0;
    const duration = 5000; 
    const intervalTime = duration / target; 
    const counterElement = document.getElementById('counter');
    const interval = setInterval(() => {
      if (counterElement) {
        counterElement.innerText = `+${count}`;
      }
      if (count < target) {
        count++;
      } else {
        clearInterval(interval);
      }
    }, intervalTime); 
  }

  onSubmit() {      
    
    if (!this.formData.acceptTerms) {
      this.message = 'Debe aceptar el tratamiento de datos personales.';
      this.isError = true;
      return;
    }
      this.http.post<{ message: string }>(this.urlApi,  this.formData).subscribe(response => {      
        this.message = 'Gracias por preferirnos ' + JSON.stringify(response.message);
        this.isError = false;  
        this.resetForm();
      }, error => {
        console.log('Error', error);
        this.message = 'Error al enviar el caso: ' + JSON.stringify(error.error);
        this.isError = true;
      });
  }

  navigateToTeam() {
    this.router.navigate(['/team']);
  }

  navigateToWhatsApp() {
    window.open(environment.urlBaseWhatssap, '_blank');    
  }

  scrollToContactForm() {
    const contactForm = document.querySelector('.contacFormContainerFull');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  }

  resetForm() {
    this.formData = {
      nombre: '',
      email: '',
      telefono: '',
      caso: '',
      acceptTerms: false 
    };
  }
}
