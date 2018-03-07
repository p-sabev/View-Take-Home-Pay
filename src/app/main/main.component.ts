import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../shared/Url';
import { Employee } from '../shared/Employee';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private httpClient: HttpClient) { }

  allowDropdown = false;
  selectedUser = false;
  employees: Employee[];
  selectedEmployee: Employee;

  search(event: any) {
    this.httpClient.get(`${url}/employees?q=${event.target.value}`)
    .subscribe((data: any[]) => {
      this.employees = data;
    });
    if (!this.allowDropdown) {
      this.toggleDropdown();
    }
  }

  onClickedOutside(e: Event) {
    if (this.allowDropdown) {
      this.toggleDropdown();
    }
  }

  getUserById(id: number) {
    this.toggleDropdown();
    this.httpClient.get(`${url}/employees?ID=${id}`)
    .subscribe((data: any[]) => {
      this.selectedUser = true;
      this.selectedEmployee = data[0];
    });
  }

  toggleDropdown() {
    this.allowDropdown = !this.allowDropdown;
  }
}

