import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

export const Label = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

export const Input = styled.TextInput`
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: #fff;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
