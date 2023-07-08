import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  contactForm!:FormGroup;

  constructor(){
    this.contactForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      message: new FormControl('',Validators.required)
    })
  }

  sendEmail(){

  }

}
