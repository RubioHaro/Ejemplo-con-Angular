import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  a ='Rodrigo R. Rubio Haro';
  BloqueoRegistro = true;
  nombre:string = "";

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
