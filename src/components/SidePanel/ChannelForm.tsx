import React from 'react'
import { Button, Form, Icon, Input, Modal } from 'semantic-ui-react'

interface IProps{
  selectedModal:boolean,
    closeModal:()=>void
}
export const ChannelForm: React.FC<IProps> = ({selectedModal, closeModal}) => {
    return (
        <Modal basic open={selectedModal}>
          <Modal.Header>Add Channel</Modal.Header>
          <Modal.Content>
            <Form>
            <Form.Field>
              <Input fluid label="Channel Name" name="channelName" />
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                label="Channel Description"
                name="channelDescription"
              />
            </Form.Field>
            </Form>      
          </Modal.Content>
          <Modal.Actions>
              <Button color="green" inverted>
               <Icon name='checkmark'/> Add
              </Button>
              <Button color="red" inverted onClick={closeModal}>
              <Icon name='remove'/>
                Cancel
              </Button>
            </Modal.Actions>
        </Modal>
    )
}
