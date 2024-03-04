import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data.service';
@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
 
}
