import React, { useContext } from 'react';
import styled from 'styled-components';
import { Player, ControlBar } from 'video-react';
import '../node_modules/video-react/dist/video-react.css';
import Context from './Context';
import tree from './video-tree.json';
import videoStore from './videos-store.js';

const VideoPlayer = styled.div`
  width: 100%;
  max-width: 20rem;
`;

const VideoButton = styled.button`
  width: 100%;
  border: none;
  height: 2rem;
  font-size: inherit;
  background: yellow;
`;

// export function getClip(id) {
//   let hasClip = true;
//   let clip = null;
//   try {
//     const images = require.context('./Videos', true);
//     const clipName = videoStore[id].videoSource
//     clip = images(`./${clipName}`);
//   } catch (e) {
//     hasClip = false;
//   }
//   return { hasClip, clip };
// }

// export function getClip(name) {
//   let hasClip = true;
//   let clip = null;
//   try {
//     const images = require.context('./Videos', true);
//     clip = images(`./${name}.mov`);
//   } catch (e) {
//     hasClip = false;
//   }
//   return { hasClip, clip };
// }

export default function Video(props) {
  const { name } = props;
  // const source = getClip(name);
  const {
    clips, setClips, setNarrative, narrative,
  } = useContext(Context);

  let showButton = true;
  if (clips.indexOf('video_dvd') > -1) {
    showButton = false;
  }

  // const nextChapter = () => {
  //   let next = tree[name];
  //   if (next === undefined) {
  //     narrative.push(name);
  //     next = narrative;
  //     setNarrative(['video_dvd']);
  //   } else {
  //     narrative.push(name);
  //   }
  //   setClips(next);
  // };
  return (
    <VideoPlayer>
      <Player
        muted
        autoPlay
        loop
        poster="/assets/poster.png"
      >
        <source src={"https://drive.google.com/file/d/0ByQzmiPVqSE9b041U05vT2VFVnc/view?usp=sharing"} />
        <ControlBar disableCompletely className="my-class" />
      </Player>
      {showButton && <VideoButton type="button" >{name}</VideoButton>}
    </VideoPlayer>

  );
}
