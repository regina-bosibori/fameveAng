import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {IntroComponent} from '../intro/intro.component';
import {TrustedByComponent} from '../trusted-by/trusted-by.component';
import{OurProductsComponent} from '../our-products/our-products.component';
import { OurApproachComponent } from '../our-approach/our-approach.component';
import {ReviewsComponent} from '../reviews/reviews.component'



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,IntroComponent,TrustedByComponent,OurProductsComponent,OurApproachComponent,ReviewsComponent,FooterComponent, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
