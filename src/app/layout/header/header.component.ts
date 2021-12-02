import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  email: any;

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private router: Router) { 
                authService.getUser().subscribe((user) => {
                  this.email = user?.email;
                })
              }

  ngOnInit(): void {
  }


  async handleSignOut() {
    try {
      const res = await this.authService.signout();
      this.router.navigateByUrl('/signin');
      this.toastr.info('Signed out, Login again to continue...');
      this.email = null;
    } catch (err) {
      this.toastr.error('Error signing out user.')
    }
  }

}
