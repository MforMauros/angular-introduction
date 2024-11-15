import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from "../person-table/person-table.component";

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
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
