import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as jwt from 'jsonwebtoken';

//const SECRET = 'secretKeyTOKEN';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor(private router: Router) {
    this.login = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  loginBtn(): void {
    if (this.login === 'admin' && this.password === '1234') {
      //const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: '1h' });
      //localStorage.setItem('token', token);
      this.router.navigate(['/list']);
    }
  }
}
