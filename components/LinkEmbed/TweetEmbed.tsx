import React from 'react';
import { TwitterEmbed } from 'react-social-media-embed';

type Props = {
  url: string;
};

const TweetEmbed = (props: Props) => (
    <div>
        <TwitterEmbed url={props.url} width={325} />
    </div>
  );

export default TweetEmbed;
