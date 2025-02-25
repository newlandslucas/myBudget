import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  margin-top: 10%;
  margin-bottom: 10%;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 12px;
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const RoomList = styled.FlatList`
  margin-bottom: 10px;
`;

export const RoomItem = styled.TouchableOpacity<{ isSelected: boolean }>`
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${({ isSelected }) => (isSelected ? "#007bff" : "#f0f0f0")};
  border-radius: 5px;
  align-items: center;
`;
