import { Routes } from '@angular/router';
import { OurApproachComponent } from './our-approach/our-approach.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { HomeComponent } from './home/home.component';
import{AboutComponent} from './about/about.component'
import { ContactpageComponent } from './contactpage/contactpage.component';

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
        path: 'about',
        component: AboutComponent
    },
    {
        path:'contacts',
        component: ContactpageComponent
    }
];
