import { createStore, applyMiddleware } from 'redux';

import { dataReducer } from "./reducer";

const thunk = require('redux-thunk').default;

const store = createStore(dataReducer , applyMiddleware(thunk))

export default store
