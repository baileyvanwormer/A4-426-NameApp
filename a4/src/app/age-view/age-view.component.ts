import { Component } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-age-view',
  templateUrl: './age-view.component.html',
  styleUrl: './age-view.component.css'
})
export class AgeViewComponent {

  constructor(private service: NameService) {}

  public getFirstName() {
    return this.service.getFirstName();
  }

  public getLastName() {
    return this.service.getLastName();
  }

  public getState() {
    return this.service.getState();
  }

  public getAge() {
    return this.service.getAge();
  }
}
