import {createStore} from 'redux'

import shopReducer from '../reducers/shopReducer'

export const store = createStore(shopReducer)