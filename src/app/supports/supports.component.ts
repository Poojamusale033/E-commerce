import { Component } from '@angular/core';

@Component({
  selector: 'app-supports',
  templateUrl: './supports.component.html',
  styleUrls: ['./supports.component.css']
})
export class SupportsComponent {
  currentYear: number = new Date().getFullYear();
}
