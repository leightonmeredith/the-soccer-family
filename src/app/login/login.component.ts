import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginGroup = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  hide = true;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  validateUser() {
    const datePipe: DatePipe = new DatePipe('en-US');
    const currentDate = new Date();
    const pwdFormat = datePipe.transform(currentDate, 'MM\'test\'yyyy');
    if(this.loginGroup.value.user === 'test' && this.loginGroup.value.password === pwdFormat){
      this.router.navigateByUrl('/hidden');
    }
  }

}
