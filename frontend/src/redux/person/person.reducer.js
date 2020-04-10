import PersonTypes from "./person.types";

const INITIAL_STATE = {
    list: []
}

const personReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PersonTypes.FETCH_PEOPLE :
            return { ...state, list: action.payload }

        default : 
            return state;
    }
}

export default personReducer;