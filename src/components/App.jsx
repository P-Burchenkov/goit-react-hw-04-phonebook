import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Contacts from './Contacts';
import SearchBox from './SearchBox';
import ContactForm from './ContactForm';

const KEY = 'contacts';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleSubmit = (data, { resetForm }) => {
    console.log(data);
    data.id = nanoid();

    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].number === data.number) {
        alert(
          `${data.number} is already in your contacts with name:  ${contacts[i].name}`
        );
        return;
      }
    }

    setContacts(contacts.push(data));
    console.log(contacts);

    resetForm();
  };

  useEffect(() => {
    console.log(contacts);
    // localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);

  // const changeFilter = evt => {
  //   setFilter(evt.currentTarget.value);
  // };

  return (
    <div className="container">
      <h1>PhoneBook</h1>
      <ContactForm handleSubmit={handleSubmit} />

      <h2>Contacts</h2>
      {/* <SearchBox value={filter} onChange={changeFilter} /> */}
      <Contacts contacts={contacts} />
    </div>
  );
}

// class OldApp extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const savedContacts = JSON.parse(localStorage.getItem(KEY));
//     if (savedContacts) {
//       this.setState({
//         contacts: savedContacts,
//       });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem(KEY, JSON.stringify(this.state.contacts));
//     }
//   }

//   handleSubmit = (data, { resetForm }) => {
//     data.id = nanoid();
//     const { contacts } = this.state;

//     for (let i = 0; i < contacts.length; i++) {
//       if (contacts[i].number === data.number) {
//         alert(
//           `${data.number} is already in your contacts with name:  ${contacts[i].name}`
//         );
//         return;
//       }
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, data],
//     }));
//     resetForm();
//   };

//   changeFilter = evt => {
//     this.setState({ filter: evt.currentTarget.value });
//   };

//   getfilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     const normilizedFilter = filter.toLocaleLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normilizedFilter)
//     );
//   };

//   delContact = evt => {
//     const { contacts } = this.state;
//     for (let i = 0; i < contacts.length; i++) {
//       if (contacts[i].id === evt.currentTarget.id) {
//         contacts.splice(i, 1);
//         this.setState(prevState => ({
//           contacts: [...prevState.contacts],
//         }));
//       }
//     }
//   };

//   render() {
//     return (
//       <div className="container">
//         <h1>PhoneBook</h1>
//         <ContactForm handleSubmit={this.handleSubmit} />

//         <h2>Contacts</h2>
//         <SearchBox value={this.state.filter} onChange={this.changeFilter} />
//         <Contacts
//           contacts={this.getfilteredContacts()}
//           deleteContact={this.delContact}
//         />
//       </div>
//     );
//   }
// }
