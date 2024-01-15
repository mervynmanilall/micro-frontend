import { Component } from '@angular/core';

@Component({
  selector: 'app-root:not(p)',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class MyFirstMfeAppComponent {
  title = 'mfe-one';
}
