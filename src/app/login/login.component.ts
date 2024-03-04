import { Component } from '@angular/core';
import { DataServiceService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
    username !: string;
    password !: string;
  
    constructor(private dataService: DataServiceService, private roter: Router) { }
    onSubmit() {
      this.dataService.regiter(this.username, this.password).subscribe(data => {
        console.log("Succes");
        this.roter.navigate(['/user']);
  
  
      },error =>{
        console.log("Xatolik");
        
      })
    }
}
