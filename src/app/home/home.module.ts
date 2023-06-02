import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { FilterDatePipe } from './filter-date.pipe';

@NgModule({
  declarations: [HomeComponent, CardComponent, FilterPipe, FilterDatePipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [HomeComponent, CardComponent],
})
export class HomeModule {}
