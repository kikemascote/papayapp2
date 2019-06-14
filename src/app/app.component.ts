import { Component } from '@angular/core';
import { PageInfoService } from './components/services/page-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public _pageInfoService: PageInfoService){

  }
  title = 'papaya';
}
