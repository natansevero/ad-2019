import React from 'react';

import CreatePerson from '../../components/create-person/create-person.component';
import PeopleList from '../../components/people-list/people-list.component';
import DrawButton from '../../components/draw-button/draw-button.component';

const SecretFriendPage = () => (
    <>
        <CreatePerson />
        <DrawButton />
        <PeopleList />
    </>
)

export default SecretFriendPage;