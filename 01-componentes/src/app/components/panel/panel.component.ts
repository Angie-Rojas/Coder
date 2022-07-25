import { Component, OnInit } from '@angular/core';
import { faCalendar, faChalkboardUser, faChartLine, faCoffee, faDatabase, faGraduationCap, faHome, faPencil } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  faCoffee = faCoffee;
  faDatabase = faDatabase;
  faHome = faHome;
  faGraduationcap = faGraduationCap;
  faCalendar = faCalendar;
  faPencil = faPencil;
  faTeacher = faChalkboardUser;
  faStatics = faChartLine;


  constructor() { }

  ngOnInit(): void {
  }

}
