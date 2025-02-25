import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #131016;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 48px;
  margin-bottom: 5px;
  text-align: center;
  color: #333;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 16px;
`;

export const RoomContainer = styled.View`
  background-color: #fff;
  padding: 16px;
  margin-top: 10%;
  margin-bottom: 15%;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

export const RoomTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #444;
  margin-bottom: 8px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 0;
  margin-top: 5%;
  margin-bottom: 10%;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const PriceText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #2d6a4f;
`;

export const TotalContainer = styled.View`
  margin-top: 24px;
  margin-bottom: 20%;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #444;
  margin-bottom: 45px;
`;

export const BudgetText = styled.Text`
  font-size: 16px;
  color: #d9534f;
  margin-top: 8px;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
