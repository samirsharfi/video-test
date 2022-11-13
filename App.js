import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import WebView from 'react-native-webview';

const App = () => {
  return (
    <WebView
      source={{
        html: '<iframe title="vimeo-player" src="https://player.vimeo.com/video/764661301?h=3eee8b876d" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
      }}
    />
  );
};

export default App;
