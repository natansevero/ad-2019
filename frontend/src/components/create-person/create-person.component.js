import React, { useState } from 'react';
import { connect } from 'react-redux';

import PersonForm from './../person-form/person-form.component';

import { createPerson } from '../../redux/person/person.actions';

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
        <PersonForm
            name={name}
            email={email}
            setName={setName}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    createPerson: person => dispatch(createPerson(person))
})

export default connect(null, mapDispatchToProps)(CreatePerson);