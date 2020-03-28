import React, { useContext } from 'react';
import styled from 'styled-components';
import { Player, ControlBar } from 'video-react';
import '../../node_modules/video-react/dist/video-react.css';
import Context from '../Context';
import videoStore from '../videos-store.js';

const VideoPlayer = styled.div`
  width: 100%;
  max-width: 20rem;
  filter: drop-shadow(10px 5px 4px);
  border-style: outset;
  border-width: 5px;
  margin: 0.5rem;
`;

const VideoButton = styled.button`
  width: 100%;
  border: none;
  height: 2rem;
  font-size: inherit;
  background: yellow;
`;

export function getClip(id) {
  let hasClip = true;
  let clip = null;
  try {
    const images = require.context('../Videos', true);
    const clipName = videoStore[id].videoSource
    clip = images(`./${clipName}`);
  } catch (e) {
    hasClip = false;
  }
  return { hasClip, clip };
}

function commonMembers(a, b) {
    const aSet = new Set(a) 
    const bSet = new Set(b)
    const intersection = new Set([...aSet].filter(x => bSet.has(x)));

    if (intersection.size > 1) {
        return true 
    }
    else {
        return false
    }
}

export default function Video(props) {
  const { name } = props;
  const source = getClip(name);
  const {
    clips, setClips, setNarrative, narrative,
  } = useContext(Context);

  let showButton = true;
  if (clips.indexOf('video_dvd') > -1) {
    showButton = false;
  }

  const nextChapter = () => {
    const categories = videoStore[name].categories;
    const relatedVids = videoStore.filter(video => commonMembers(video.categories, categories));
    const relatedVidIds = relatedVids.map(video => video.videoId);
    const nextVidIds = relatedVidIds.filter(id =>  !(narrative.includes(id)));

    narrative.push(name);

    if (nextVidIds.length > 0) {
      setClips(nextVidIds);
    }
    else {
      setClips(narrative);
    }
  };
  return (
    <VideoPlayer>
      <Player
        muted
        autoPlay
        loop
        poster="/assets/poster.png"
      >
        <source src={source.clip} />
        <ControlBar disableCompletely className="my-class" />
      </Player>
      {showButton && <VideoButton type="button" onClick={nextChapter}>{name}</VideoButton>}
    </VideoPlayer>

  );
}
