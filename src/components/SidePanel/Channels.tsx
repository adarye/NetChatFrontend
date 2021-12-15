import  axios  from "axios";
import React, {useState, useEffect } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { IChannel } from "../../models/channels";
import { ChannelForm } from "./ChannelForm";
import { ChannelItem } from "./ChannelItem";

const Channels =()=> {
const [myChannels, setChannels] = useState<IChannel[]>([]);
const [selectedModal, setModal]=useState(false);

useEffect(()=>{
  axios.get<IChannel[]>('http://localhost:5000/api/channels')
        .then((res) => {
            setChannels(res.data);         
        })
},[])

  const openModal = () => setModal(true);

  const closeModal = () =>setModal(false);
  
  
 const  displayChannels = (channels:IChannel[]) => {
    return (
         channels.length>0 &&
     channels.map((channel:IChannel) => (
        <ChannelItem channel={channel} key={channel.id}></ChannelItem>   
     ))
    )
}


  return(
      <React.Fragment>
        <Menu.Menu style={{ paddingBottom: "2em" }}>
          <Menu.Item>
            <span>
              <Icon name="exchange" /> CHANNELS
            </span>{" "}
            ({myChannels.length})<Icon name="add" onClick={openModal} />
          </Menu.Item>
          {displayChannels(myChannels)}
        </Menu.Menu>
        <ChannelForm selectedModal={selectedModal} closeModal={closeModal}></ChannelForm>
      </React.Fragment>
  )
}

export default Channels;