import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {ContactIntroComponent} from '../contactintro/contactintro.component';

@Component({
  selector: 'app-contactpage',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,ContactIntroComponent],
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.css'
})
export class ContactpageComponent {

}
