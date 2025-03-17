import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);
export default store;
// store.dispatch(updateUser({ foo: 'foo' }));
// store.dispatch(updateUser({ bar: 'bar' }));
// store.dispatch(updateUser({ foo: 'baz' }));

// store.dispatch(addContact({ name: 'John', number: '123456789' }));
// store.dispatch(addContact({ name: 'Sam', number: '123456789' }));
// store.dispatch(addContact({ name: 'Able', number: '123456789' }));
// store.dispatch(addContact({ name: 'Peter', number: '123456789' }));

// console.log(store.getState());
