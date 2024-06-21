import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'myheader',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
