import React, { useContext } from 'react';
import styled from 'styled-components';
import '../node_modules/video-react/dist/video-react.css';
import Context from './Context';
import Video from './Video';

const SplitScreen = styled.div`
  display: flex;
  height: 100%;
  background-color: black;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h1`
  color: white;
  width: 100%;
  text-align: center;
`;

export default function Videos() {
  const [clips, setClips] = React.useState(['beach', 'fair', 'zoo']);
  const [narrative, setNarrative] = React.useState(['video_dvd']);
  const context = {
    clips, setClips, narrative, setNarrative,
  };

  const videoList = clips.map((clip) => (
    <Video key={clip} name={clip} />
  ));

  let showTitle = narrative.length === 1;
  if (clips.indexOf('video_dvd') > -1 && showTitle) {
    showTitle = false;
  }

  return (
    <SplitScreen>
      {showTitle && <Header>Build your story: make a video</Header>}
      <Context.Provider value={context}>
        {videoList}
      </Context.Provider>
    </SplitScreen>
  );
}
