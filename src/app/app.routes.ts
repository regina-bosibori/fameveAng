import { Routes } from '@angular/router';
import { OurApproachComponent } from './our-approach/our-approach.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: 'products',
        component: OurProductsComponent
    }
];
