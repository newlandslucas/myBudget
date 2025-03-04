import styled from "styled-components/native";
import { SafeAreaView } from "react-native";

export const SafeArea = styled(SafeAreaView)`
   flex: 1;
   background-color: #131016;
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #131016; /* Cor de fundo padrão */
  margin-bottom: 10%;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #FFF;
  margin-bottom: 8px;
  margin-top: 46px;
  text-align: left;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
  text-align: left;
`;

export const InputContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputLabel = styled.Text`
  font-size: 16px;
  color: #FFF;
  margin-bottom: 12px;
  text-align: center;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: #6272a4;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  width: 90%;
  justify-content: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
