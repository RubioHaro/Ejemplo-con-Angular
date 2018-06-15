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

  constructor(){
    setTimeout( ()=>{
      this.BloqueoRegistro = false;
    }, 3000 )
  }

  Alertar(){
    alert('El boton esta listo');
  }

}
