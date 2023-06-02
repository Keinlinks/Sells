import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchServiceService } from 'src/app/search-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor(private searchService: SearchServiceService) {}
  logeado: boolean = false;
  search!: string;
  @Output() emitir = new EventEmitter<any>();
  ngOnInit(): void {}

  buscar() {
    this.searchService.searchQuery.next(this.search);
  }
}
