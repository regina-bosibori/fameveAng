import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { TrustedByComponent } from './trusted-by/trusted-by.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {OurApproachComponent} from './our-approach/our-approach.component';
import {ReviewsComponent} from './reviews/reviews.component'
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms'




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,RouterOutlet, HeaderComponent,FooterComponent, IntroComponent,TrustedByComponent,OurProductsComponent,OurApproachComponent,ReviewsComponent,MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fameveAng';
}
