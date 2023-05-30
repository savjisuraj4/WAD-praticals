import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  userData={
    name:'',
    password:'',
    email:''
  }
  onsubmit(){
    
    this.userData.name=(<HTMLInputElement>document.getElementById('name')).value;
    this.userData.email =(<HTMLInputElement>document.getElementById('name')).value;
    this.userData.password=(<HTMLInputElement>document.getElementById('password')).value;
    localStorage.setItem('userData',JSON.stringify(this.userData));
    alert('User Added Successfully');
  };
  
}


