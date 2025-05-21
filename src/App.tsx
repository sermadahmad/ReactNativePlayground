import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { ChatContext } from './Contexts/ChatContext';

const App = () => {
  const [prompts, setPrompts] = React.useState<string[]>([
  ]);
  const [responses, setResponses] = React.useState<string[]>([
  ]);

  return (
    <ChatContext.Provider value={{prompts, setPrompts, responses, setResponses}}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ChatContext.Provider>
  );
};

export default App;