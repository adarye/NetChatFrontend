import React, {useState} from 'react'
import { Button, Form, Icon, Input, Modal } from 'semantic-ui-react'
import { IChannel } from '../../models/channels'
import { v4 as uuid} from 'uuid';

interface IProps{
  selectedModal:boolean,
    closeModal:()=>void,
    addChannel:(channel:IChannel)=>void
}
export const ChannelForm: React.FC<IProps> = ({selectedModal, closeModal, addChannel}) => {

  const initialChannel = {
    id: '',
    name: '',
    description: ''
  }
  const [channel, setChannel] = useState<IChannel>(initialChannel)
  const handledInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setChannel({...channel, [e.target.name]: e.target.value})
  }
  const handleSubmit = () => {
    let newChannel = {
      ...channel,
      id: uuid(),
    }

    addChannel(newChannel);
    closeModal()
  }
    return (
        <Modal basic open={selectedModal}>
          <Modal.Header>Add Channel</Modal.Header>
          <Modal.Content>
            <Form>
            <Form.Field>
              <Input fluid label="Channel Name" name="name" onChange={handledInputChange} />
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                label="Channel Description"
                name="description"
                onChange={handledInputChange}
              />
            </Form.Field>
            </Form>      
          </Modal.Content>
          <Modal.Actions>
              <Button color="green" onClick={()=> handleSubmit()} inverted>
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
