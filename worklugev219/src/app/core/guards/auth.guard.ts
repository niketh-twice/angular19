import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service.ts.service';


export class authGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      console.log('authhhhh')
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}