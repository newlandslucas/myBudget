import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useBudget } from "../../context/BudgeContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";
import { 
  SafeArea, 
  Container, 
  Title, 
  Subtitle, 
  InputContainer, 
  InputLabel, 
  Input, 
  StyledButton, 
  ButtonText 
} from "./styles";

const Home = () => {
  const [budget, setBudget] = useState("");
  const { setTotalBudget } = useBudget();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "Home">>();

  // Função para formatar o valor enquanto o usuário digita
  const formatCurrency = (value: string) => {
    // Remove tudo que não for número
    const numericValue = value.replace(/\D/g, "");
    // Converte para número e divide por 100 para simular casas decimais
    const floatValue = parseFloat(numericValue) / 100;
    // Formata para o padrão monetário brasileiro
    if (!isNaN(floatValue)) {
      return floatValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }
    return "";
  };

  const handleChange = (text: string) => {
    setBudget(formatCurrency(text));
  };

  const handleStart = () => {
    // Converte o valor formatado para número antes de salvar
    const parsedBudget = parseFloat(budget.replace(/[R$\s.]/g, "").replace(",", "."));
    if (!isNaN(parsedBudget) && parsedBudget > 0) {
      setTotalBudget(parsedBudget);
      navigation.navigate("AddItem");
    }
  };

  return (
    <SafeArea>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView 
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Container>
            <Title>Bem-vindo</Title>
            <Subtitle>Ao seu app de orçamento</Subtitle>

            <InputContainer>
              <InputLabel>Informe seu orçamento inicial:</InputLabel>
              <Input
                keyboardType="numeric"
                value={budget}
                onChangeText={handleChange}
                placeholder="R$ 0,00"
              />
              <StyledButton onPress={handleStart}>
                <ButtonText>Começar</ButtonText>
              </StyledButton>
            </InputContainer>
          </Container>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeArea>
  );
};

export default Home;
