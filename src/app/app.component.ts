import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Michalis';

  person0: Person = {
      givenName: 'Michalis',
      surName: 'Mavromanolakis',
      age: 36,
      email: 'mauromanolakism@gmail.com',
      address: 'Stratou 23'
    };

    person1: Person = {
      givenName: 'Bob',
      surName: 'Marley',
      age: 76,
      email: 'Bob @gmail.com',
      address: 'kerkis 113'
    };
}
