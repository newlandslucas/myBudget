import React, { useState } from "react";
import { useBudget } from "../context/BudgetContext";
import { useNavigation } from "@react-navigation/native";
import { Container, Label, Input, StyledButton, ButtonText } from "../styles/AddItemStyles";
import { v4 as uuidv4 } from "uuid";

const AddItemScreen: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const { items, setItems } = useBudget();
  const navigation = useNavigation();

  const handleAddItem = () => {
    const parsedPrice = parseFloat(price);
    if (name && parsedPrice > 0) {
      setItems([...items, { id: uuidv4(), name, price: parsedPrice }]);
      setName("");
      setPrice("");
    }
  };

  return (
    <Container>
      <Label>Nome do Item:</Label>
      <Input value={name} onChangeText={setName} placeholder="Ex: Sofá" />

      <Label>Preço:</Label>
      <Input keyboardType="numeric" value={price} onChangeText={setPrice} placeholder="R$ 0,00" />

      <StyledButton onPress={handleAddItem}>
        <ButtonText>Adicionar Item</ButtonText>
      </StyledButton>

      <StyledButton onPress={() => navigation.navigate("List")}>
        <ButtonText>Ver Lista</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default AddItemScreen;
