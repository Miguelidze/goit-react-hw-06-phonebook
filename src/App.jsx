import { useState, useEffect } from "react";
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Notification from './components/Notification';
import { ContainerMain, H1, H5 } from './components/Components.styled';

export default function App() {
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const contact = localStorage.getItem('contacts');
        const parsedContact = JSON.parse(contact);
        if (parsedContact) { setContacts(parsedContact) }
        else {
            setContacts([
                { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
                { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
                { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
                { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
            ])
        }
    }
        , []);

    useEffect(
        () => {
            localStorage.setItem('contacts', JSON.stringify(contacts));
        }
        , [contacts])

    const resetForm = ({ e }) => e.target = ['', ''];

    const addContacts = ({ id, name, number, e }) => {
        if (contacts.find(el => el.name === name)) {
            alert(`${name} is already in contacts !!!`)
            return
        }
        const contact = { id, name, number };
        setContacts([contact, ...contacts]);
        resetForm({ e });
    }

    const filterString = (e) => setFilter(e.target.value);

    const deleteContact = ({ id }) => setContacts(contacts.filter(contact => contact.id !== id));

    return (
        <>
            <ContainerMain>
                <H1>Phonebook</H1>
                <Form
                    onSubmit={addContacts}
                />
                <H1>Contacts</H1>
                {(contacts.length !== 0)
                    ? <>
                        <H5>Find contacts by name</H5>
                        <Filter
                            filterString={filterString}
                        />
                        {/*  */}
                        <ContactList
                            contacts={contacts}
                            filter={filter}
                            deleteContact={deleteContact}
                        />
                    </>
                    : <Notification message="Phonebook is empty" />}
            </ContainerMain>
        </>
    )
}