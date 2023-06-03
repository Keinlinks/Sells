import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  ngOnInit() {}
  isfixed: boolean = false;
  title = 'Sells';
  isThrottled = false;

  @ViewChild('header') header!: ElementRef;
  @HostListener('window:scroll')
  fixed() {
    if (!this.isThrottled) {
      this.isThrottled = true;
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      this.isfixed = scrollPosition > 300;

      setTimeout(() => {
        this.isThrottled = false;
      }, 200);
    }
  }
}
