import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../models/contact.model';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  @Output() deleteContact: EventEmitter<Contact> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addClasses() {
    let genderClass = '';
    switch (this.contact.gender) {
      case 'm': {
        genderClass = 'alert-info';
        break;
      }
      case 'f': {
        genderClass = 'alert-danger';
        break;
      }
    }
    return ['alert', genderClass];
  }

  delete(contact: Contact) {
    this.deleteContact.emit(contact);
  }
}
