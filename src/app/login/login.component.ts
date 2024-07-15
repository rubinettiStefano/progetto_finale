import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 
{
  constructor(private authService:AuthService){}

  requestFasulla()
  {
    this.authService.requestFauslla().subscribe();
  }

  login()
  {
    //MOCK, li prende da una form ovviamente
    let username = 'stefano@mailfinta.fint';
    let password = 'paperino2';

    this.authService.login(username,password).subscribe(
      {
        next: data=>
        {
          localStorage.setItem("token",data.accessToken);
        },
        error: err=>
        {

        }

      }
    )
  }
}