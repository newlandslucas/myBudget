import React from "react";
import { useBudget } from "../context/BudgetContext";
import { useNavigation } from "@react-navigation/native";
import { Container, ItemText, StyledButton, ButtonText } from "../styles/ListStyles";
import { FlatList } from "react-native";

const ListScreen: React.FC = () => {
  const { items } = useBudget();
  const navigation = useNavigation();

  return (
    <Container>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemText>{item.name} - R$ {item.price.toFixed(2)}</ItemText>}
      />
      
      <StyledButton onPress={() => navigation.navigate("Summary")}>
        <ButtonText>Finalizar Compra</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default ListScreen;
