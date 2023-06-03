import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

type Props = {
    url: string;
};

const InstaEmbed = (props: Props) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <InstagramEmbed url={props.url} width={328} />
  </div>
);

export default InstaEmbed;
