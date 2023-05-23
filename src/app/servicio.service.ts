import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  constructor() {}
  dataObservable: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  productos: any[] = [];

  async loadData() {
    const resp = await fetch('assets/Articulos.json');
    const datos = await resp.json();
    this.productos = datos;
    return this.productos;
  }

  getData() {
    return this.productos;
  }
}
