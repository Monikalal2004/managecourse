import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManagecourseComponent } from './managecourse/managecourse.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ManagecourseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'managecourse';
}
