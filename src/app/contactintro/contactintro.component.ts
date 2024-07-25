import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-contactintro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactintro.component.html',
  styleUrl: './contactintro.component.css'
})



export class ContactIntroComponent{
  user:any;
  submitform(){
    console.log(this.user);
  }
  

  }
  
  


