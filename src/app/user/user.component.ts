import { Component } from '@angular/core';
import { DataServiceService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  username !: string;
  password !: string;

  constructor(private dataService: DataServiceService, private roter: Router) { }
  onSubmit() {
    this.dataService.regiter(this.username, this.password).subscribe(data => {
      console.log("Royxatdan otildi");
      this.roter.navigate(['/user']);


    },error =>{
      console.log("Xatolik");
      
    })
  }
}
