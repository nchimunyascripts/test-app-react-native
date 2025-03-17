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

const contactReducer = (state, newConatct) => [...state, newConatct];
const userReducer = (state, update) => merger(state, update);

const DEFAULT_STATE = { user: {}, contacts: [] };
const reducer = (state, action) => {
  if (action.type === 'UPDATE_USER') {
    return merger(state, {
      user: userReducer(state.user, action.playload),
    });
  }
  if (action.type === 'UPDATE_CONTACT') {
    return merger(state, {
      contacts: contactReducer(state.contacts, action.payload),
    });
  }
  return state;
};

const x = new Store(reducer, DEFAULT_STATE);

x.dispatch({ type: 'UPDATE_USER', playload: { foo: 'foo' } });
x.dispatch({ type: 'UPDATE_USER', playload: { bar: 'bar' } });
x.dispatch({ type: 'UPDATE_USER', playload: { foo: 'baz' } });
x.dispatch({
  type: 'UPDATE_CONTACT',
  playload: { name: 'John', number: '123456789' },
});
x.dispatch({
  type: 'UPDATE_CONTACT',
  playload: { name: 'Sam', number: '123456789' },
});
x.dispatch({
  type: 'UPDATE_CONTACT',
  playload: { name: 'Peter', number: '123456789' },
});

console.log(x.getState());
