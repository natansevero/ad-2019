import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';

import UpdatePersonModal from '../update-person-modal/update-person-modal.component';

import { deletePerson } from '../../redux/person/person.actions';

import { PersonItemContainer } from './person-item.styles';

const PersonItem = ({ person: { _id, name, email }, deletePerson }) => {
    const [show, setShow] = useState(false);
    
    const handleOpenModal = () => {
        setShow(true)
    }

    const handleCloseModal = () => {
        setShow(false)
    }

    return (
        <>
            <PersonItemContainer>
                <Row>
                    <Col sm={6} md={3}>
                        {name}
                    </Col>
                    <Col sm={6} md={3}>
                        {email}
                    </Col>
                    <Col
                        sm={12}
                        md={{ number: 3, offset: 3 }}
                    >
                        <Row>
                            <Col>
                                <Button variant="warning" onClick={handleOpenModal}>Atualizar</Button>
                            </Col>
                            <Col>
                                <Button variant="danger" onClick={() => deletePerson(_id)}>Remover</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </PersonItemContainer>

            <UpdatePersonModal
                show={show}
                handleCloseModal={handleCloseModal}
                person={
                    JSON.parse(JSON.stringify({
                        _id, name, email
                    }))
                }
            />
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    deletePerson: id => dispatch(deletePerson(id))
})

export default connect(null, mapDispatchToProps)(PersonItem);