import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'products-tabs',
  templateUrl: 'our-products.component.html',
  standalone: true,
  imports: [MatTabsModule],
})
export class OurProductsComponent{}

