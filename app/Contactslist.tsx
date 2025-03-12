    import contacts from '../scripts/contacts'
    import React from 'react'
    import { SectionList, Text, SectionListData, SectionListRenderItemInfo } from 'react-native';
    import Row from './Row'

    // Define the type for the contact item
    type Contact = {
        id: string;
        name: string;
    // Add other properties as needed
    };

    // Define the type for the section data
    type Section = {
        title: string;
        data: Contact[];
    };

    // Define the type for the props of ContactsList
    type ContactsListProps = {
        contacts: Contact[];
    };

    // Define the type for the renderItem function
    const renderItem = ({ item }: SectionListRenderItemInfo<Contact>) => <Row {...item} />;

    // Define the type for the renderSectionHeader function
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
