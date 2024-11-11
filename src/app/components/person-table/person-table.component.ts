import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: 'Michalis',
    surName: 'Mavromanolakis',
    age: 36,
    email: 'mauromanolakism@gmail.com'
  }
}
