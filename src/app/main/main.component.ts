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
    this.employees = [];
    this.getUserByNames(event.target.value);
    if (!this.allowDropdown) {
      this.toggleDropdown();
    }
  }

  onClickedOutside(e: Event) {
    if (this.allowDropdown) {
      this.toggleDropdown();
    }
  }

  getUserByNames(name: string) {
    if (name === '') {return; }
    this.httpClient.get(`${url}/employees/names/${name}`)
    .subscribe((data: any[]) => {
      this.employees = data['result'];
    });
  }

  getUserByName(name: string){
    this.httpClient.get(`${url}/employees/name/${name}`)
    .subscribe((data: any[]) => {
      this.employees = data['result'];
    });
  }

  getUserBySurname(surname: string){
    this.httpClient.get(`${url}/employees/surname/${surname}`)
    .subscribe((data: any[]) => {
      this.employees = data['result'];
    });
  }

  getUserById(id: number) {
    this.toggleDropdown();
    this.httpClient.get(`${url}/employees/ID/${id}`)
    .subscribe((data: any[]) => {
      this.selectedUser = true;
      this.selectedEmployee = data['result'][0];
      console.log(this.selectedEmployee);
    });
  }

  toggleDropdown() {
    this.allowDropdown = !this.allowDropdown;
  }
}

