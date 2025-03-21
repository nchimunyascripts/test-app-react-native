import { Contact } from '@/app/App';
const NUM_CONTACTS = 3;

type Person = {
  name: string;
  phone: string;
};

interface RowTypes {
  name: string;
  phone: string;
  key: any;
}
[];

const firstNames: string[] = [
  'Emma',
  'Noah',
  'Olivia',
  'Liam',
  'Ava',
  'William',
  'Sophia',
  'Mason',
  'Isabella',
  'James',
  'Mia',
  'Benjamin',
  'Charlotte',
  'Jacob',
  'Abigail',
  'Michael',
  'Emily',
  'Elijah',
  'Harper',
  'Ethan',
  'Amelia',
  'Alexander',
  'Evelyn',
  'Oliver',
  'Elizabeth',
  'Daniel',
  'Sofia',
  'Lucas',
  'Madison',
  'Matthew',
  'Avery',
  'Aiden',
  'Ella',
  'Jackson',
  'Scarlett',
  'Logan',
  'Grace',
  'David',
  'Chloe',
  'Joseph',
  'Victoria',
  'Samuel',
  'Riley',
  'Henry',
  'Aria',
  'Owen',
  'Lily',
  'Sebastian',
  'Aubrey',
  'Gabriel',
  'Zoey',
  'Carter',
  'Penelope',
  'Jayden',
  'Lillian',
  'John',
  'Addison',
  'Luke',
  'Layla',
  'Anthony',
  'Natalie',
  'Isaac',
  'Camila',
  'Dylan',
  'Hannah',
  'Wyatt',
  'Brooklyn',
  'Andrew',
  'Zoe',
  'Joshua',
  'Nora',
  'Christopher',
  'Leah',
  'Grayson',
  'Savannah',
  'Jack',
  'Audrey',
  'Julian',
  'Claire',
  'Ryan',
  'Eleanor',
  'Jaxon',
  'Skylar',
  'Levi',
  'Ellie',
  'Nathan',
  'Samantha',
  'Caleb',
  'Stella',
  'Hunter',
  'Paisley',
  'Christian',
  'Violet',
  'Isaiah',
  'Mila',
  'Thomas',
  'Allison',
  'Aaron',
  'Alexa',
  'Lincoln',
];

const lastNames: string[] = [
  'Smith',
  'Jones',
  'Brown',
  'Johnson',
  'Williams',
  'Miller',
  'Taylor',
  'Wilson',
  'Davis',
  'White',
  'Clark',
  'Hall',
  'Thomas',
  'Thompson',
  'Moore',
  'Hill',
  'Walker',
  'Anderson',
  'Wright',
  'Martin',
  'Wood',
  'Allen',
  'Robinson',
  'Lewis',
  'Scott',
  'Young',
  'Jackson',
  'Adams',
  'Tryniski',
  'Green',
  'Evans',
  'King',
  'Baker',
  'John',
  'Harris',
  'Roberts',
  'Campbell',
  'James',
  'Stewart',
  'Lee',
  'County',
  'Turner',
  'Parker',
  'Cook',
  'Mc',
  'Edwards',
  'Morris',
  'Mitchell',
  'Bell',
  'Ward',
  'Watson',
  'Morgan',
  'Davies',
  'Cooper',
  'Phillips',
  'Rogers',
  'Gray',
  'Hughes',
  'Harrison',
  'Carter',
  'Murphy',
];

// generate a random number between min and max
const rand = (max: number, min = 0): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// generate a name
const generateName = (): string =>
  `${firstNames[rand(firstNames.length - 1)]} ${
    lastNames[rand(lastNames.length - 1)]
  }`;

// generate a phone number
const generatePhoneNumber = (): string =>
  `${rand(999, 100)}-${rand(999, 100)}-${rand(9999, 1000)}`;

// create a person
const createContact = (): Person => ({
  name: generateName(),
  phone: generatePhoneNumber(),
});
// compare two contacts for alphabetizing
export const compareNames = (contact1: Contact, contact2: Contact): boolean =>
  contact1.name > contact2.name;

// add keys to based on index
const addKeys = (val: Person, key: number): RowTypes => ({ key, ...val });

// create an array of length NUM_CONTACTS and add keys
export default Array.from({ length: NUM_CONTACTS }, createContact).map(addKeys);
