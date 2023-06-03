import React from 'react';
import Spotify from 'react-spotify-embed';

type Props = {
    link: string;
};

const SpotifyEmbed = (props: Props) => <Spotify link={props.link} />;

export default SpotifyEmbed;
