import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Rubio Haro Systems Cloud';
  a ='Rodrigo R. Rubio Haro';
  BloqueoRegistro = true;
  nombre:string = "";

  Empresas: any = [
    {plan: 'free',cercania: 1, distancia: 0.9, active: false, nombre : "Soluciones Seguridad Digital"},
    {plan: 'premium',cercania: 1, distancia: 1.8, active: true, nombre : "Servidores y hospedaje en linea"},
    {plan: 'free',cercania: 2, distancia: 2, active: true, nombre : "Servicios Digitales y asesoria"},
    {plan: 'free',cercania: 3, distancia: 4.5, active: false, nombre : "Servicios de monitoreo con IA, Rubio Haro y asociados."},
    {plan: 'premium',cercania: 1, distancia: 1.0, active: true, nombre : "Consultoria de implementacion de IAs Rubio Haro Group."},
  ];

lat: number = 19.416406;
lng: number = -99.1651395;

  constructor(){
    setTimeout( ()=>{
      this.BloqueoRegistro = false;
    }, 3000 )
  }

  Alertar(){
    alert('El boton esta listo');
  }

}
