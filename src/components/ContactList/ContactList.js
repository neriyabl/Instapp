import { Component } from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import UserProfile from "../UserProfile/UserProfile";
import "./ContactList.css";

class ContactList extends Component {
  render() {
    return (
      <div className="contact-list">
        <UserProfile />
        <div className="contact-list-elment">
          {this.props.contacts.map((contact) => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              onClick={() => this.props.onContactSelected(contact.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ContactList;
