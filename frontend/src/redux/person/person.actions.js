import PersonTypes from './person.types';

import api from '../../services/api';

export const fetchPeople = () => {
    return dispatchEvent => {
        api.get('people')
            .then(res => {
                dispatchEvent({ type: PersonTypes.FETCH_PEOPLE, payload: res.data })
            })
            .catch(error => {
                console.log(error);
            })
    }
}
