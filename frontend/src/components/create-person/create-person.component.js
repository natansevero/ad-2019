import React, { useState } from 'react';
import { connect } from 'react-redux';

import PersonForm from './../person-form/person-form.component';

import { createPerson } from '../../redux/person/person.actions';

import { CreatePersonContainer } from './create-person.styles';

const CreatePerson = ({ createPerson }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        createPerson({
            name, 
            email
        });

        handleReset();
    }

    const handleReset = () => {
        setName('')
        setEmail('')
    }

    return (
        <CreatePersonContainer>
            <PersonForm
                name={name}
                email={email}
                setName={setName}
                setEmail={setEmail}
                handleSubmit={handleSubmit}
                handleReset={handleReset}
            />
        </CreatePersonContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    createPerson: person => dispatch(createPerson(person))
})

export default connect(null, mapDispatchToProps)(CreatePerson);