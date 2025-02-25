import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";
import { useBudget } from "../../context/BudgeContext";
import { 
  Container, 
  Title, 
  Subtitle, 
  RoomContainer, 
  RoomTitle, 
  ItemContainer, 
  ItemText, 
  PriceText, 
  TotalContainer, 
  TotalText, 
  BudgetText, 
  StyledButton, 
  ButtonText 
} from "./styles";

const ListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "List">>();
  const { rooms, totalBudget } = useBudget();

  return (
    <Container>
      <Title>Lista de Itens</Title>
      <Subtitle>Acompanhe seus gastos por cômodo</Subtitle>

      {rooms.map((room) => (
        <RoomContainer key={room.id}>
          <RoomTitle>{room.name}</RoomTitle>
          {room.items.map((item) => (
            <ItemContainer key={item.id}>
              <ItemText>{item.name}</ItemText>
              <PriceText>R$ {item.price.toFixed(2)}</PriceText>
            </ItemContainer>
          ))}
        </RoomContainer>
      ))}

      <TotalContainer>
        <TotalText>Total Gasto: R$ {rooms.reduce((acc, room) => acc + room.items.reduce((sum, item) => sum + item.price, 0), 0).toFixed(2)}</TotalText>
        <BudgetText>Orçamento Inicial: R$ {totalBudget.toFixed(2)}</BudgetText>
      </TotalContainer>

      {/* Botão para voltar para AddItemScreen */}
      <StyledButton onPress={() => navigation.navigate("AddItem")}>
        <ButtonText>Adicionar Mais Itens</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default ListScreen;
