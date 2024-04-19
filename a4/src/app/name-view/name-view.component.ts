import { Component } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-name-view',
  templateUrl: './name-view.component.html',
  styleUrl: './name-view.component.css'
})
export class NameViewComponent {

  constructor(private service: NameService) {}

  public handleKeyPress(name: string) {
    this.service.setName(name);
    this.service.callAPI().subscribe(data => this.service.setAge(data.age)); // in name-view since this is where the handleKeyPress is
  }

}
