import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router,
    private toastrService: ToastrService,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const {email, password } = f.form.value;
    this.authService.signIn(email, password)
    .then((res) => {
      this.router.navigateByUrl('/');
      this.toastrService.success('Login OK!');
    })
    .catch((err) => {
      console.log(err.message);
      this.toastrService.error(err.message);
    })
  }

}
