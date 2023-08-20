import {
  Component,
  OnInit,
  AfterContentInit,
  ContentChild,
} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;
  ngOnInit(): void {}
  ngAfterContentInit(): void {
    this.employee.empName = 'Abdullah';
  }
}
