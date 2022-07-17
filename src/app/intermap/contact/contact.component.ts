import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  submit: boolean = false;
  constructor(private fb: FormBuilder) {}

  contactForm = this.fb.group({
    name: ['', [Validators.required], Validators.pattern('[a-zA-Z]{3,30}')],
    email: [
      '',
      [Validators.required],
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ],
    subject: ['', [Validators.required], Validators.pattern('[a-zA-Z]{3,30}')],
    message: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.contactForm);
    this.submit = true;
    this.contactForm.reset();
    setTimeout(() => (this.submit = false), 3000);
  }
}
