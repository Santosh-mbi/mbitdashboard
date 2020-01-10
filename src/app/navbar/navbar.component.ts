import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  email: string;
  password: string;

  constructor(private router: Router) {}

  public login(email: string, password: string) {
      this.router.navigate(['dashboard'], { replaceUrl: true });
      
  }

  public logout() {
    this.router.navigate(['/'], { replaceUrl: true });
    
}

  ngOnInit() {
  }

}
