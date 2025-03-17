import { combineReducers } from 'redux';
import { UPDATE_CONTACT, UPDATE_USER, ActionTypes } from './actions'; // Import the action types and interfaces

// Define the shape of the state
interface UserState {
  // Define the structure of the user state
  name?: string;
  email?: string;
  prevContact?: {
    name: string;
    phone: string;
  };
}

interface ContactState {
  // Define the structure of the contacts state
  name: string;
  phone: string;
}

// Define the root state
export interface RootState {
  user: UserState;
  contacts: ContactState[];
}

// Utility function to merge objects
const merger = <T,>(prev: T, next: Partial<T>): T =>
  Object.assign({}, prev, next);

// Contact reducer
const contactReducer = (
  state: ContactState[] = [],
  action: ActionTypes,
): ContactState[] => {
  if (action.type === UPDATE_CONTACT) {
    return [...state, action.payload];
  }
  return state;
};

// User reducer
const userReducer = (state: UserState = {}, action: ActionTypes): UserState => {
  switch (action.type) {
    case UPDATE_USER:
      return merger(state, action.payload);
    case UPDATE_CONTACT:
      return merger(state, { prevContact: action.payload });
    default:
      return state;
  }
};

// Combine reducers
const reducer = combineReducers<RootState>({
  user: userReducer,
  contacts: contactReducer,
});

export default reducer;
