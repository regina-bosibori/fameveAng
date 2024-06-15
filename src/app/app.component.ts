import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { TrustedByComponent } from './trusted-by/trusted-by.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,IntroComponent,TrustedByComponent,OurProductsComponent,MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fameveAng';
}
