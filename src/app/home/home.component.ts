import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
