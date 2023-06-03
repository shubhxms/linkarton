import React from 'react';
import { YouTubeEmbed } from 'react-social-media-embed';

type Props = {
    url: string;
};

const YoutubeEmbed = (props: Props) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <YouTubeEmbed url={props.url} width={325} height={220} />
    </div>
    );

export default YoutubeEmbed;
