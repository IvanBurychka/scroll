import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scr';

  onScroll() {
    const header = document.getElementById('header')!;
    const body = document.getElementById('body')!;

    // header.scroll =  body.scroll;
    header.scrollTo({ left: body.scrollLeft})
  }
}
