import React, { useState } from "react";
import { useBudget } from "../../context/BudgeContext";
import { useNavigation } from "@react-navigation/native";
import { Container, Label, Input, StyledButton, ButtonText, RoomList, RoomItem } from "./styles";
import { FlatList } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";

const AddItemScreen: React.FC = () => {
  const [roomName, setRoomName] = useState("");
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const { rooms, addRoom, addItem } = useBudget();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleAddRoom = () => {
    if (roomName.trim()) {
      addRoom(roomName.trim());
      setRoomName("");
    }
  };

  const handleAddItem = () => {
    if (selectedRoom && itemName.trim() && parseFloat(itemPrice) > 0) {
      addItem(selectedRoom, itemName.trim(), parseFloat(itemPrice));
      setItemName("");
      setItemPrice("");
    }
  };

  return (
    <Container>
      {/* Criar Cômodo */}
      <Label>Adicionar Cômodo:</Label>
      <Input value={roomName} onChangeText={setRoomName} placeholder="Ex: Sala, Cozinha..." />
      <StyledButton onPress={handleAddRoom}>
        <ButtonText>Adicionar Cômodo</ButtonText>
      </StyledButton>

      {/* Selecionar Cômodo */}
      <Label>Escolha um cômodo:</Label>
      <FlatList
        data={rooms}
        keyExtractor={(room) => room.id}
        renderItem={({ item }) => (
          <RoomItem onPress={() => setSelectedRoom(item.id)} isSelected={selectedRoom === item.id}>
            <ButtonText>{item.name}</ButtonText>
          </RoomItem>
        )}
      />

      {/* Adicionar Itens ao Cômodo Selecionado */}
      {selectedRoom && (
        <>
          <Label>Adicionar Item ao {rooms.find((room) => room.id === selectedRoom)?.name}:</Label>
          <Input value={itemName} onChangeText={setItemName} placeholder="Nome do item" />
          <Input keyboardType="numeric" value={itemPrice} onChangeText={setItemPrice} placeholder="Preço (R$)" />
          <StyledButton onPress={handleAddItem}>
            <ButtonText>Adicionar Item</ButtonText>
          </StyledButton>
        </>
      )}

      <StyledButton onPress={() => navigation.navigate("List")}>
        <ButtonText>Ver Lista</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default AddItemScreen;
