import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const options = {
    cancelText: 'Cancelar',
    okText: 'Sim',
}

const Messages = () => (
    <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        confirmOptions={options}
        progressBar />
)

export default Messages;