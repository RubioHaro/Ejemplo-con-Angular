import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  Empresas: any = [
    {id:1, plan: 'free',cercania: 1, distancia: 0.9, active: false, nombre : "Soluciones Seguridad Digital", descripcion: "Una empresa dedicada la proteccion de tus sistemas y tus datos. Brindandote servicios con las alta tecnologia"},
    {id:2, plan: 'premium',cercania: 1, distancia: 1.8, active: true, nombre : "Servidores y hospedaje en linea", descripcion: "Ideal para la pequeñas y medianas empresas, renta de los servidores mas eficientes y con mejores integraciones del mercado."},
    {id:3, plan: 'free',cercania: 2, distancia: 2, active: true, nombre : "Servicios Digitales y asesoria", descripcion: "Servicios integrales de asesoria de Grupo Rubio Haro Digital (c)"},
    {id:4, plan: 'free',cercania: 3, distancia: 4.5, active: false, nombre : "Servicios de monitoreo con IA, Rubio Haro y asociados.", descripcion: "La inteligencia artificial al alcance de tu PyME, accesible y sotenible, simplemente: el futuro."},
    {id:5, plan: 'premium',cercania: 1, distancia: 1.0, active: true, nombre : "Consultoria de implementacion de IAs Rubio Haro Group.", descripcion: "Servicios especiales para integracion de IA para clientes del grupo Rubio Haro Digital"},
  ];
  Empresa : any = {};
  id = null;
  constructor(private route:ActivatedRoute) {
    console.log("El parametro recibido es: " + this.route.snapshot.params['id']);
    console.log("El parametro recibido es: " + this.route.snapshot.queryParams['action']);
    this.id = this.route.snapshot.params['id'];
    console.log(this.BuscarEmpresa());
    this.Empresa = this.BuscarEmpresa();
  }

  BuscarEmpresa(){
    return this.Empresas.filter((Empresa) => {return Empresa.id == this.id}) [0] || null;
  }

  ngOnInit() {
  }

}
