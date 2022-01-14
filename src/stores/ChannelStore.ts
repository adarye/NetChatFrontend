import { IChannel } from './../models/channels';
import { action, makeObservable, observable, configure, runInAction } from 'mobx';
import { createContext } from "react";
import agent from '../api/agent';

configure({ enforceActions: 'always' });
class ChannelStore {
    @observable channels: IChannel[] = [];
    @observable isModalVisible: boolean = false;

    constructor() {
        makeObservable(this);
    }
    @action loadChannels = async () => {
        try {
            let res = await agent.Channels.list();
            runInAction(()=>{
                res.forEach((channel) => this.channels.push(channel))
            })
           
        } catch (err) {
            console.log(err);
        }
    }
    @action createChannel = async (channel: IChannel) => {
        try {
            await agent.Channels.create(channel);
            runInAction(()=>{
            this.channels.push(channel);
            })
        } catch (err) {
            console.log(err);
        }
    }
    @action showModal = (state: boolean) => {
        this.isModalVisible = state;
    }
}

export default createContext(new ChannelStore());