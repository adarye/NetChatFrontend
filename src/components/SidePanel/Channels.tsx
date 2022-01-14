import React, { useEffect,  useContext} from "react";
import { Icon, Menu } from "semantic-ui-react";
import { IChannel } from "../../models/channels";
import  ChannelForm  from "./ChannelForm";
import { ChannelItem } from "./ChannelItem";
import ChannelStore from "../../stores/ChannelStore"; 
import {observer} from "mobx-react-lite";


const Channels = () => {
  // const [myChannels, setChannels] = useState<IChannel[]>([]);
  const channelStore = useContext(ChannelStore);
  const {channels} = channelStore;

  useEffect(() => {
  channelStore.loadChannels();
  }, [channelStore]);

  const displayChannels = (channels: IChannel[]) => {
    return (
      channels.length > 0 &&
      channels.map((channel: IChannel) => (
        <ChannelItem channel={channel} key={channel.id}></ChannelItem>
      ))
    );
  };



  return (
    <React.Fragment>
      <Menu.Menu style={{ paddingBottom: "2em" }}>
        <Menu.Item>
          <span>
            <Icon name="exchange" /> CHANNELS
          </span>{" "}
          ({channels.length})<Icon name="add" onClick={()=>channelStore.showModal(true)} />
        </Menu.Item>
        {displayChannels(channels)}
      </Menu.Menu>
      <ChannelForm
      ></ChannelForm>
    </React.Fragment>
  );
};

export default observer(Channels);
