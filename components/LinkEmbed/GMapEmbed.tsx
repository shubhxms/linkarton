import React from 'react';
import GoogleMapReact from 'google-map-react';

type Props = {};

const GMapEmbed = (props: Props) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >

    </div>
  );
};

export default GMapEmbed;
