import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { PersonItemContainer } from './person-item.styles';

const PersonItem = ({ name, email }) => {

    return (
        <PersonItemContainer>
            <Row>
                <Col md={2}>
                    {name}
                </Col>
                <Col md={3}>
                    {email}
                </Col>
                <Col md={{ number: 2, offset: 5 }} align='right'>
                    <Row>
                        <Col>
                            <button>a</button>
                        </Col>
                        <Col>
                            <button>b</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </PersonItemContainer>
    )
}

export default PersonItem;