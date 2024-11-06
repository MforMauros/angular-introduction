import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Michalis';

  person = {
    givenName: 'Michalis',
    surName: 'Mavromanolakis',
    age: 36,
    email: 'mauromanolakism@gmail.com'
  }
}
