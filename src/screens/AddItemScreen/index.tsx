import React, { useState } from "react";
import { useBudget } from "../../context/BudgeContext";
import { useNavigation } from "@react-navigation/native";
import { 
  Container, Label, InputRow, Input, RoundButton, ButtonText, 
  StyledButton, RoomItem, SafeArea, RoomItemText, FooterContainer, 
  RoomScrollContainer, RoomScrollView, NoRoomsText, ModalBackground, 
  ModalContainer, ModalView, ModalInput, ModalButton, ModalButtonText, FooterModal
} from "./styles";
import { Text, TouchableWithoutFeedback, Keyboard, Alert, Modal, View, KeyboardAvoidingView, Platform } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";

const AddItemScreen: React.FC = () => {
  const [roomName, setRoomName] = useState("");
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { rooms, addRoom } = useBudget();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleAddRoom = () => {
    const trimmedRoomName = roomName.trim();

    if (!trimmedRoomName) return;

    const roomExists = rooms.some(room => room.name.toLowerCase() === trimmedRoomName.toLowerCase());

    if (roomExists) {
      Alert.alert("Erro", "Este cômodo já foi adicionado!");
      return;
    }

    addRoom(trimmedRoomName);
    setRoomName("");
  };

  const openModal = (roomId: string) => {
    setSelectedRoom(roomId);
    setModalVisible(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeArea>
        <Container>
          <Label>Adicionar Cômodo</Label>
          <InputRow>
            <Input 
              value={roomName} 
              onChangeText={setRoomName} 
              placeholder="Ex: Sala, Cozinha..." 
              placeholderTextColor="#888" 
            />
            <RoundButton onPress={handleAddRoom}>
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>+</Text>
            </RoundButton>
          </InputRow>

          <Label>Cômodos</Label>
          {rooms.length === 0 ? (
            <NoRoomsText>Nenhum cômodo registrado.</NoRoomsText>
          ) : (
            <RoomScrollContainer>
              <RoomScrollView>
                {rooms.map((room) => (
                  <RoomItem key={room.id} onPress={() => openModal(room.id)} isSelected={selectedRoom === room.id}>
                    <RoomItemText isSelected={selectedRoom === room.id}>{room.name}</RoomItemText>
                  </RoomItem>
                ))}
              </RoomScrollView>
            </RoomScrollContainer>
          )}
        </Container>

        {/* Modal para adicionar itens ao cômodo */}
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <ModalBackground onPress={() => setModalVisible(false)} />

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
              <FooterModal>
                <ModalView>
                  <Label style={{ alignSelf: "flex-start", marginLeft: 8 }}>Adicionar Item</Label>
                  <ModalInput placeholder="Nome do item" placeholderTextColor="#888" />
                  <ModalInput keyboardType="numeric" placeholder="Preço (R$)" placeholderTextColor="#888" />

                  <ModalButton onPress={() => setModalVisible(false)}>
                    <ModalButtonText>Adicionar</ModalButtonText>
                  </ModalButton>
                </ModalView>
              </FooterModal>
            </KeyboardAvoidingView>
          </View>
        </Modal>

        {/* Footer com o botão fixo */}
        <FooterContainer>
          <StyledButton onPress={() => navigation.navigate("List")}>
            <ButtonText>Ver Resumo</ButtonText>
          </StyledButton>
        </FooterContainer>
      </SafeArea>
    </TouchableWithoutFeedback>
  );
};

export default AddItemScreen;
