import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { FormsModule, NgForm } from "@angular/forms";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    FormsModule,
    NgClass
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  onClickSubmit(contactForm: NgForm) {
    console.log(contactForm.form.controls['name'].value);
    console.log(contactForm.form.controls['email'].value);
    console.log(contactForm.form.controls['text'].value);

    contactForm.form.reset();
  }

}
