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
      this.contacts = contacts;
    });
  }

  addContact(contact: Contact) {
    this.cs.createContact(contact).subscribe(response => {
      this.contacts.unshift(response);
    });
  }

  deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter(c => c.id !== contact.id);
    this.cs.deleteContact(contact).subscribe(response => {
      console.log('contact deleted');
      console.log(response);
    });
  }

}
