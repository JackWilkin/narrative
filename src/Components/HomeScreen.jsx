import React, { useContext } from 'react';
import styled from 'styled-components';
// import '../../node_modules/video-react/dist/video-react.css';
import Context from '../Context';
import Video from './Video';

const HomeScreen = styled.div`
  display: flex;
  height: 100%;
  background-color: #2300e2;
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
  const [clips, setClips] = React.useState([...Array(97).keys()]);
  const [narrative, setNarrative] = React.useState([]);
  const context = {
    clips, setClips, narrative, setNarrative,
  };

  const videoList = clips.map((clip) => (
    <Video key={clip} name={clip} />
  ));

  // let showTitle = narrative.length === 0;
  // if (clips.indexOf('video_dvd') > -1 && showTitle) {
  //   showTitle = false;
  // }

  return (
    <HomeScreen>
      {/* {showTitle && <Header>Build your story: make a video</Header>} */}
      <Context.Provider value={context}>
        {videoList}
      </Context.Provider>
    </HomeScreen>
  );
}
