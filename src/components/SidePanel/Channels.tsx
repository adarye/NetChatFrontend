import axios from "axios";
import React, { useState, useEffect } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { IChannel } from "../../models/channels";
import { ChannelForm } from "./ChannelForm";
import { ChannelItem } from "./ChannelItem";
import agent from '../../api/agent';


const Channels = () => {
  const [myChannels, setChannels] = useState<IChannel[]>([]);
  const [selectedModal, setModal] = useState(false);

  useEffect(() => {
   agent.Channels.list().then((res) => {
      setChannels(res);
    });
  }, []);

  const openModal = () => setModal(true);

  const closeModal = () => setModal(false);

  const displayChannels = (channels: IChannel[]) => {
    return (
      channels.length > 0 &&
      channels.map((channel: IChannel) => (
        <ChannelItem channel={channel} key={channel.id}></ChannelItem>
      ))
    );
  };

  const addChannel = (channel: IChannel) => {
   agent.Channels.create(channel)
    .then((res) => {
    console.log(channel);
    setChannels([...myChannels, channel]);
    })
  };

  return (
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
      <ChannelForm
        selectedModal={selectedModal}
        closeModal={closeModal}
        addChannel={addChannel}
      ></ChannelForm>
    </React.Fragment>
  );
};

export default Channels;
