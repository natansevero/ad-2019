import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import PersonItem from '../person-item/person-item.component';

import { fetchPeople } from '../../redux/person/person.actions';

import { selectPeopleList } from '../../redux/person/person.selectors';

const PeopleList = ({ people, fetchPeople }) => {
    useEffect(() => {
        fetchPeople();
    }, [fetchPeople]);

    return (
        <>
            <p>
                <strong>OBS.:</strong> O sorteiro só pode ser realizado se houve mais de 3 pessoas e um núemro par de pessoas.
            </p>
            <ListGroup>
                {people.map(person => (
                    <PersonItem key={person._id} person={person} />
                ))}
            </ListGroup>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    people: selectPeopleList
});

const mapDispatchToProps = dispatch => ({
    fetchPeople: () => dispatch(fetchPeople())
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);