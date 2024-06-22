import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {AboutIntroComponent} from '../about-intro/about-intro.component'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent,AboutIntroComponent,FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
