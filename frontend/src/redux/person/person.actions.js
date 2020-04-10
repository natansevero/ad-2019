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

export const createPerson = person => {
    return dispatchEvent => {
        api.post('people', person)
            .then(res => {
                dispatchEvent(fetchPeople())
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const updatePerson = ({ _id, name, email }) => {
    return dispatchEvent => {
        api.put(`people/${_id}`, { name, email })
            .then(res => {
                dispatchEvent(fetchPeople())
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const deletePerson = id => {
    return dispatchEvent => {
        api.delete(`people/${id}`)
            .then(res => {
                dispatchEvent(fetchPeople())
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const drawPeople = () => {
    return dispatchEvent => {
        api.put('draws', {})
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }
}