import { Component, OnInit } from '@angular/core';
import { faLightbulb, faMoon, faSun, faSunPlantWilt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faSun = faMoon;

  constructor() { }

  ngOnInit(): void {
  }

}
