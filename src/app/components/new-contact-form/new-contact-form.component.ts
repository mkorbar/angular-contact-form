import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-contact-form',
  templateUrl: './new-contact-form.component.html',
  styleUrls: ['./new-contact-form.component.css']
})
export class NewContactFormComponent implements OnInit {
  @Output() addContact: EventEmitter<any> = new EventEmitter();

  name: string;
  gender: string;
  email: string;
  phone: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const contact = {
      name: this.name,
      gender: this.gender,
      email: this.email,
      phone: this.phone
    };
    console.log(contact);
    this.addContact.emit(contact);
  }
}
