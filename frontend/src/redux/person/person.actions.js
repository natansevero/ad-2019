import React from 'react';
import { toastr } from 'react-redux-toastr';
import ConfirmAlert from '../../components/confirm-alert/cofirm-alert.component';

import PersonTypes from './person.types';

import api from '../../services/api';

export const fetchPeople = () => {
    return dispatchEvent => {
        api.get('people')
            .then(res => {
                dispatchEvent({ type: PersonTypes.FETCH_PEOPLE, payload: res.data });
            })
    }
}

export const createPerson = person => {
    return dispatchEvent => {
        api.post('people', person)
            .then(res => {
                dispatchEvent(fetchPeople());
                toastr.success('Sucesso', 'Pessoa cadastrada!');
            })
            .catch(error => {
                toastr.error('Atenção', 'Problema ao cadastrar!');
            })
    }
}

export const updatePerson = ({ _id, name, email }) => {
    return dispatchEvent => {
        api.put(`people/${_id}`, { name, email })
            .then(res => {
                dispatchEvent(fetchPeople());
                toastr.success('Sucesso', 'Pessoa atualizada!');
            })
            .catch(error => {
                toastr.error('Atenção', 'Problema ao atualizar!');
            })
    }
}

export const deletePerson = id => {
    return dispatchEvent => {
        toastr.confirm(null, {
            onOk: () => {
                api.delete(`people/${id}`)
                    .then(res => {
                        dispatchEvent(fetchPeople())
                        toastr.success('Sucesso', 'Pessoa deletada!');
                    })
                    .catch(error => {
                        toastr.error('Atenção', 'Problema ao deletar!');
                    })
            },
            onCancel: () => {},
            component: () => (
                <ConfirmAlert message='Você tem certeza disso?' />
            )
        })
    }
}

export const drawPeople = () => {
    return dispatchEvent => {
        api.put('draws', {})
            .then(res => {
                toastr.success('Sucesso', 'Sorteio realizado e e-mails enviados!');
            })
            .catch(error => {
                toastr.error('Atenção', 'Problema ao realizar sorteio!');
            })
    }
}