import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { localStorageToken } from './localstorage.token';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  role = 'admin';
  constructor(@Inject(localStorageToken) private localStorage: any) {}
  ngOnInit(): void {
    this.localStorage.setItem('name', 'Hilton Hotel');
  }
}
