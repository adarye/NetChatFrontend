import React from 'react'
import { Menu } from 'semantic-ui-react'
import { IChannel } from '../../models/channels'

interface IProps{
    channel:IChannel
}
export const ChannelItem: React.FC<IProps>= ({channel}) => {
    return (         
                <Menu.Item
                key={channel.id}
                name={channel.name}
                onClick={() => console.log(channel)}
                style={{ opacity: 0.7 }}
                >
                # {channel.name}
                </Menu.Item> 
    )
}
