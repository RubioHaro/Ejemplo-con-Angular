import { Injectable } from '@angular/core';

@Injectable()
export class EmpresasService {

  Empresas: any = [
    {id:1, plan: 'free',cercania: 1, distancia: 0.9, active: false, nombre : "Soluciones Seguridad Digital"},
    {id:2, plan: 'premium',cercania: 1, distancia: 1.8, active: true, nombre : "Servidores y hospedaje en linea"},
    {id:3, plan: 'free',cercania: 2, distancia: 2, active: true, nombre : "Servicios Digitales y asesoria"},
    {id:4, plan: 'free',cercania: 3, distancia: 4.5, active: false, nombre : "Servicios de monitoreo con IA, Rubio Haro y asociados."},
    {id:5, plan: 'premium',cercania: 1, distancia: 1.0, active: true, nombre : "Consultoria de implementacion de IAs Rubio Haro Group."},
    {id:6, plan: 'premium',cercania: 1, distancia: 1.0, active: true, nombre : "CPES, Capacitacion y preparacion para empresas Socias."}
  ];
  
  constructor() { }

  public GetEmpresas(){
    return this.Empresas;
  }

  public BuscarEmpresa(id){
    return this.Empresas.filter((Empresa) => {return Empresa.id == id}) [0] || null;
  }

}
