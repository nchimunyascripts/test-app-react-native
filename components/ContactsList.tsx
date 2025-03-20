import { Text, SectionList } from 'react-native';
import React from 'react';
import Row from './Row';

type Contact = {
  name: string;
  phone: string;
};

interface ContactsListProps {
  contacts: Contact[];
}

const renderItem = ({ item }: { item: Contact }) => <Row {...item} />;
const renderSectionHeader = ({ section }: { section: { title: string } }) => (
  <Text>{section.title}</Text>
);

const ContactsList: React.FC<ContactsListProps> = ({ contacts }) => {
  const contactsByLetter: Record<string, Contact[]> = contacts.reduce(
    (obj, contact) => {
      const firstLetter = contact.name[0].toUpperCase();
      return {
        ...obj,
        [firstLetter]: [...(obj[firstLetter] || []), contact],
      };
    },
    {} as Record<string, Contact[]>,
  );

  const sections = Object.keys(contactsByLetter)
    .sort()
    .map((letter) => ({
      title: letter,
      data: contactsByLetter[letter],
    }));
  return (
    <SectionList
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      sections={sections}
    />
  );
};

export default ContactsList;
