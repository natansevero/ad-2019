import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { drawPeople } from '../../redux/person/person.actions';

import { selectNumberOfPeople } from './../../redux/person/person.selectors';

const DrawButton = ({ numberOfPeople, drawPeople }) => (
    <>
        {
            (numberOfPeople > 0)
            &&
            <Row>
                <Col>
                    <br />
                    <Button
                        block
                        variant="info"
                        onClick={() => drawPeople()}
                        disabled={numberOfPeople < 4 || numberOfPeople % 2 !== 0}
                    >
                        Sortear pessoas/amigos
                    </Button>
                    <p>
                        <strong>OBS.:</strong> O sorteiro só pode ser realizado se houve mais de 3 pessoas e um núemro par de pessoas.
                    </p>
                </Col>
            </Row>

        }
    </>
)

const mapStateToProps = createStructuredSelector({
    numberOfPeople: selectNumberOfPeople
});

const mapDispatchToProps = dispatch => ({
    drawPeople: () => dispatch(drawPeople())
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawButton); 