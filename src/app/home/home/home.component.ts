import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { SearchServiceService } from 'src/app/search-service.service';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  productos: any[] = [];
  search: string = '';
  filtros_forms = new FormGroup({
    precio: new FormControl('Todo'),
    categoria_1: new FormControl(''),
    categoria_2: new FormControl(''),
    categoria_3: new FormControl(''),
    categoria_4: new FormControl(''),
    tipo_1: new FormControl(''),
    tipo_2: new FormControl(''),
    tipo_3: new FormControl(''),
    tipo_4: new FormControl(''),
  });
  filtro_tiempo = new FormGroup({
    tiempo: new FormControl('Mas nuevo...'),
  });
  constructor(
    private servicio: ServicioService,
    private searchService: SearchServiceService
  ) {
    servicio.loadData().then((data) => {
      console.log(data);
      this.productos = data;
    });
  }
  prueba() {
    console.log(this.filtros_forms);
  }

  ngOnInit(): void {
    this.searchService.searchQuery.subscribe((termino) => {
      this.search = termino;
      // Aquí puedes realizar el filtrado de productos utilizando el término de búsqueda
      console.log('Realizando búsqueda:', this.search);
    });
  }
}
