import { Component } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-name-view',
  templateUrl: './name-view.component.html',
  styleUrl: './name-view.component.css'
})
export class NameViewComponent {

  constructor(private service: NameService) {}

  public handleKeyPressFirstName(firstName: string) {
    this.service.setFirstName(firstName);
  }

  public handleKeyPressLastName(lastName: string) {
    this.service.setLastName(lastName);
    this.service.callAgeAPI().subscribe(data => this.service.setAge(data.age)); // in name-view since this is where the handleKeyPress is
    this.service.callDetailsAPI().subscribe(data => this.service.setDetails(data.countryOrigin));
  }

}
