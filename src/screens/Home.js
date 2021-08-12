import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Container = styled.View`
  align-items: center;
  // 여기서 패딩값을 줘서 노치디자인 문제 해결
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

const Home = ({navigation}) => {
  const insets = useSafeAreaInsets();
  // 각 값만큼을 띄워야 화면이 가려지는 부분이 없다 (노치디자인 문제)
  // console.log(insets);
  // 출력 결과: {"bottom": 0, "left": 0, "right": 0, "top": 0}
  return (
    <Container>
      <StyledText>Home</StyledText>
      <Button title="List" onPress={() => navigation.navigate('List')} />
    </Container>
  );
};

export default Home;
