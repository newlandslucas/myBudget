import React from "react";
import { useBudget } from "../context/BudgetContext";
import { Container, Label, StyledButton, ButtonText } from "../styles/SummaryStyles";
import * as MailComposer from "expo-mail-composer";

const SummaryScreen: React.FC = () => {
  const { totalBudget, items } = useBudget();
  const totalSpent = items.reduce((sum, item) => sum + item.price, 0);
  const remainingBudget = totalBudget - totalSpent;

  const handleSendEmail = () => {
    const itemList = items.map(item => `${item.name}: R$ ${item.price.toFixed(2)}`).join("\n");
    MailComposer.composeAsync({
      recipients: ["seuemail@example.com"],
      subject: "Lista de Compras",
      body: `Total disponível: R$ ${totalBudget.toFixed(2)}\nTotal gasto: R$ ${totalSpent.toFixed(2)}\nOrçamento restante: R$ ${remainingBudget.toFixed(2)}\n\nItens:\n${itemList}`
    });
  };

  return (
    <Container>
      <Label>Orçamento Restante: R$ {remainingBudget.toFixed(2)}</Label>
      <StyledButton onPress={handleSendEmail}>
        <ButtonText>Enviar por Email</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default SummaryScreen;
