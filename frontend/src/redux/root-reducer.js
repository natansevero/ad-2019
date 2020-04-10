import { combineReducers } from 'redux';

import personReducer from './person/person.reducer';

const rootReducer = combineReducers({
    person: personReducer,
});

export default rootReducer;