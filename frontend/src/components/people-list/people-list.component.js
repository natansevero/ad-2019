import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchPeople } from '../../redux/person/person.actions';

import { selectPeopleList } from '../../redux/person/person.selectors';
import PersonItem from '../person-item/person-item.component';

const PeopleList = ({ people, fetchPeople }) => {
    useEffect(() => {
        fetchPeople();
    }, [fetchPeople]);

    return (
        <ListGroup>
            {people.map(person => (
                <PersonItem key={person._id} name={person.name} email={person.email} />
            ))}
        </ListGroup>
    )
}

const mapStateToProps = createStructuredSelector({
    people: selectPeopleList
});

const mapDispatchToProps = dispatch => ({
    fetchPeople: () => dispatch(fetchPeople())
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);