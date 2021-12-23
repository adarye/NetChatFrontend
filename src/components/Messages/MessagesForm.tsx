import React from 'react'
import { Segment, Input, Button } from 'semantic-ui-react';

export const MessagesForm = () => {
    return (
        <Segment>
            <Input fluid name="message" style={{marginBottom: '0.7em'}} label={<Button icon="add" />}
            labelPosition='left' placeholder="Write your message"
            >
            </Input>
            <Button.Group icon widths="2">
                <Button color="orange" content="Add Reply" labelPosition='left' icon="edit" />
                <Button color="teal" content="Upload Media" labelPosition='right' icon="cloud upload" />

            </Button.Group>
            </Segment>
    )
}