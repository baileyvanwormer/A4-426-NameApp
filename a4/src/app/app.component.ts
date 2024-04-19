import { Component } from '@angular/core';
import { NameService } from './name.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'a4';

  constructor(private service: NameService) {

  }
  
  public getState() {
    return this.service.getState();
  }
}
