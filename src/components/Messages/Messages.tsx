import React from 'react'
import { Segment, Comment } from 'semantic-ui-react';
import {MessagesHeader} from './MessagesHeader';
import {MessagesForm} from './MessagesForm';

export const Messages = () => {
    return (
    <React.Fragment>
        <MessagesHeader />
        <Segment>
            <Comment.Group></Comment.Group>
        </Segment>
        <MessagesForm />
    </React.Fragment>
    )
}

export default Messages;
