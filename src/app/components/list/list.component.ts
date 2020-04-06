import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../models/contact.model';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  contacts: Contact[];

  constructor(private cs: ContactService) { }

  ngOnInit(): void {
    this.cs.getContacts().subscribe(contacts => {
      console.log(contacts);
      this.contacts = contacts;
    });
  }

  addContact(contact: Contact) {
    // TODO: add an API call
    this.contacts.unshift(contact);
  }

  deleteContact(contact: Contact) {
    // TODO: add an API call
    this.contacts = this.contacts.filter(c => c.id !== contact.id);
  }

}
