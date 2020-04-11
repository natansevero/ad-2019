import React from 'react';

import { ConfrmAlertContainer } from './confirm-alert.styles';

const ConfirmAlert = ({ message }) => (
    <ConfrmAlertContainer>
        {message}
    </ConfrmAlertContainer>
)

export default ConfirmAlert;