import contacts from '../scripts/contacts'
import React from 'react'
import { SectionList, Text, SectionListData, SectionListRenderItemInfo } from 'react-native';
import Row from './Row'

type Contact = {
    id: string;
    name: string;
};

type Section = {
    title: string;
    data: Contact[];
};

type ContactsListProps = {
    contacts: Contact[];
};

const renderItem = ({ item }: SectionListRenderItemInfo<Contact>) => <Row {...item} />;

const renderSectionHeader = (obj: { section: SectionListData<Contact> }) => (
    <Text>{obj.section.title}</Text>
);

const ContactsList: React.FC<ContactsListProps> = (props) => {
    type ContactsByLetter = {
        [key: string]: Contact[];
    };
    const contactsByLetter = props.contacts.reduce<ContactsByLetter>((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {})
    
    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter]
    }))
    return (
        <SectionList
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        sections={sections}
        />
    );
};

export default ContactsList
