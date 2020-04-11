import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';

import PersonForm from '../person-form/person-form.component';

import { updatePerson } from './../../redux/person/person.actions';

const UpdatePersonModal = ({ show, person, handleCloseModal, updatePerson }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setName(person.name)
        setEmail(person.email)
    }, [person])

    const handleSubmit = event => {
        event.preventDefault();

        updatePerson({
            _id: person._id,
            name,
            email
        });

        handleCloseModal();
    }

    const handleReset = () => {
        setName('')
        setEmail('')
    }

    return (
        <Modal 
            size="lg"
            show={show} 
            onHide={handleCloseModal}>
            
            <Modal.Header closeButton>
                <Modal.Title>Atualizar <strong>{person.name}</strong> </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <PersonForm
                    name={name}
                    email={email}
                    setName={setName}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit}
                    handleReset={handleReset}
                />
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = dispatch => ({
    updatePerson: person => dispatch(updatePerson(person))
})

export default connect(null, mapStateToProps)(UpdatePersonModal);