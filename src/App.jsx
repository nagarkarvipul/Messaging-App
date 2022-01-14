import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

const apikey = 'sdk65ntx9ed9';

const client = StreamChat.getInstance(apikey);

const App = () => {
    return (
        <div classname="app_wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer

                />
                <ChannelContainer

                />
            </Chat>

        </div>
    );
}

export default App;
