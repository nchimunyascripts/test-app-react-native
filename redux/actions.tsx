// Define action types as string literals
export const UPDATE_USER: 'UPDATE_USER' = 'UPDATE_USER';
export const UPDATE_CONTACT: 'UPDATE_CONTACT' = 'UPDATE_CONTACT';

// Define interfaces for the action payloads
interface UpdateUserAction {
  type: typeof UPDATE_USER;
  payload: {
    // Define the structure of the update object
    // For example, if the update contains a user object with a name and email:
    name?: string;
    email?: string;
  };
}

interface AddContactAction {
  type: typeof UPDATE_CONTACT;
  payload: {
    // Define the structure of the newContact object
    // For example, if the newContact contains a name and phone number:
    name: string;
    phone: string;
  };
}

// Define a union type for all actions
export type ActionTypes = UpdateUserAction | AddContactAction;

// Define the action creators with TypeScript types
export const updateUser = (
  update: UpdateUserAction['payload'],
): UpdateUserAction => ({
  type: UPDATE_USER,
  payload: update,
});

export const addContact = (
  newContact: AddContactAction['payload'],
): AddContactAction => ({
  type: UPDATE_CONTACT,
  payload: newContact,
});
