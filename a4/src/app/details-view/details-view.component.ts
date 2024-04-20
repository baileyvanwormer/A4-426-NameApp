import { Component } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.css'
})
export class DetailsViewComponent {

  constructor(private service: NameService) {}

  public getDetails() {
    return this.service.getDetails();
  }

}
