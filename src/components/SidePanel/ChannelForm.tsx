import React, {useContext, useState} from 'react'
import { Button, Form, Icon, Input, Modal } from 'semantic-ui-react'
import { IChannel } from '../../models/channels'
import { v4 as uuid} from 'uuid';
import ChannelStore from "../../stores/ChannelStore"; 
import {observer} from "mobx-react-lite";

interface IProps{
}
 const ChannelForm: React.FC<IProps> = ({}) => {

  const initialChannel = {
    id: '',
    name: '',
    description: ''
  }
  const [channel, setChannel] = useState<IChannel>(initialChannel)
  const {isModalVisible, showModal, createChannel} = useContext(ChannelStore);
  const handledInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChannel({...channel, [e.target.name]: e.target.value})
  }
  const handleSubmit = () => {
    let newChannel = {
      ...channel,
      id: uuid(),
    }

    createChannel(newChannel);
    showModal(false);
  }
    return (
        <Modal basic open={isModalVisible}>
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
              <Button color="red" inverted onClick={()=>showModal(false)}>
              <Icon name='remove'/>
                Cancel
              </Button>
            </Modal.Actions>
        </Modal>
    )
}
export default observer(ChannelForm);
