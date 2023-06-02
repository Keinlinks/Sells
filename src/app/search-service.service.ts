import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchServiceService {
  searchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}
}
