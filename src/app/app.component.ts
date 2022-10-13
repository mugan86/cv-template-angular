import { Component } from '@angular/core';
import { PublicBaseComponent } from '@core/public/components/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends PublicBaseComponent {
  title = 'cv-template-angular';
}
