import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import personReducer from './person/person.reducer';

const rootReducer = combineReducers({
    person: personReducer,
    toastr: toastrReducer
});

export default rootReducer;