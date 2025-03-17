const merger = (prev, next) => Object.assign({}, prev, next);
// const reducer = (state, update) => merger(state, update);

let state = {};
class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  dispatch(update) {
    this.state = this.reducer(this.state, update);
  }
}
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_CONTACT = 'UPDATE_CONTACT';

const contactReducer = (state, action) => {
  if (action.type === UPDATE_CONTACT) {
    return [...state, action.payload];
  }
  return state;
};

const userReducer = (state, action) => {
  if (action.type === UPDATE_USER) {
    return merger(state, action.payload);
  }
  if (action.type === UPDATE_CONTACT)
    return merger(state, { prevContact: action.payload });
  return state;
};

const DEFAULT_STATE = { user: {}, contacts: [] };

const reducer = (state, action) => ({
  user: userReducer(state.user, action),
  contacts: contactReducer(state.contacts, action),
});

const updateUser = (update) => ({
  type: UPDATE_USER,
  payload: update,
});

const addContact = (newContact) => ({
  type: UPDATE_CONTACT,
  payload: newContact,
});

const store = new Store(reducer, DEFAULT_STATE);
store.dispatch(updateUser({ foo: 'foo' }));
store.dispatch(updateUser({ bar: 'bar' }));
store.dispatch(updateUser({ foo: 'baz' }));

store.dispatch(addContact({ name: 'John', number: '123456789' }));
store.dispatch(addContact({ name: 'Sam', number: '123456789' }));
store.dispatch(addContact({ name: 'Able', number: '123456789' }));
store.dispatch(addContact({ name: 'Peter', number: '123456789' }));

console.log(store.getState());
