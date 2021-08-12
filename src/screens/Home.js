import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';

const Container = styled.View`
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

const Home = ({navigation}) => {
  return (
    <Container>
      <StyledText>Home</StyledText>
      <Button title="List" onPress={() => navigation.navigate('List')} />
    </Container>
  );
};

export default Home;
