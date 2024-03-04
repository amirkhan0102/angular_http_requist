import { Component } from '@angular/core';
import { DataServiceService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username !: string;
  password !: string;

  constructor(private dataService: DataServiceService, private roter: Router) { }
  onSubmit() {
    this.dataService.regiter(this.username, this.password).subscribe(data => {
      console.log("Royxatdan otildi");
      this.roter.navigate(['login']);


    },error =>{
      console.log("Xatolik");
      
    })
  }
}
