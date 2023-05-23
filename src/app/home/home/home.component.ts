import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  productos: any[] = [];

  constructor(private servicio: ServicioService) {
    servicio.loadData().then((data) => {
      console.log(data);
      this.productos = data;
    });
  }

  ngOnInit(): void {}

  prueba() {
    this.productos = this.servicio.getData();
    console.log(this.productos);
  }
}
