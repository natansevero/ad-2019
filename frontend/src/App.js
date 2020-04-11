import React from 'react';
import { Container } from 'react-bootstrap';

import Header from './components/header/header.component';
import Messages from './components/messages/messages.component';

import SecretFriendPage from './pages/secret-friend/secret-friend.page';

const App = () => (
  <>
    <Header />
    <Container>
      <SecretFriendPage />
    </Container>

    <Messages />
  </>
);

export default App;