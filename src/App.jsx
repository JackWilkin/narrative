import React from 'react';
import styled from 'styled-components';
import SplitScreen from './SplitScreen';

const HomeScreen = styled.div`
  height: 100%;
`;

function App() {
  return (
    <HomeScreen>
      <SplitScreen />
    </HomeScreen>
  );
}

export default App;
