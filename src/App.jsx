import React, {useState} from 'react';
import styled from 'styled-components';
import {SwitchTheme, LightTheme, DarkTheme} from './utils/SwitchTheme';

const App = () => {
  const [theme, setTheme] = useState(LightTheme);

  const handleToggleTheme = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  };

  return (
    <SwitchTheme theme={theme}>
      <Container>
        <ThemedText>Welcome to Themed App</ThemedText>
        <ThemedButton>
          <ButtonText>Primary Button</ButtonText>
        </ThemedButton>
        <DangerButton>
          <ButtonText>Secondary Button</ButtonText>
        </DangerButton>
        <ThemedButton onPress={handleToggleTheme}>
          <ButtonText>Toggle Theme</ButtonText>
        </ThemedButton>
      </Container>
    </SwitchTheme>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

const ThemedText = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.main};
`;

const ThemedButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 5px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
  font-family: ${props => props.theme.fonts.bold};
`;

const DangerButton = styled(ThemedButton)`
  background-color: ${props => props.theme.colors.secondary};
`;

export default App;
