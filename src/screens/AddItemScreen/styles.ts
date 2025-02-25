import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #131016;
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #131016;
  margin-top: 10%;
  margin-bottom: 10%;
  justify-content: flex-start; 
`;

export const Label = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 24px;
`;

export const InputRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #1c1c1e;
  color: #ffffff;
`;

export const RoundButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  margin-left: 10px;
  border-radius: 22px;
  background-color: #6272a4;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: #44475a;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  justify-content: flex-end;
  min-width: 90%;
  align-self: center;
  margin-top: 12px;
`;

/* Seção de Cômodos */
export const RoomScrollContainer = styled.View`
  margin-top: 12px;
`;

export const RoomScrollView = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  padding: 10px 0;
`;

export const RoomItem = styled.TouchableOpacity<{ isSelected: boolean }>`
  padding: 10px 15px; /* Ajuste para o card acompanhar o texto */
  margin-right: 8px;
  border-radius: 8px;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? "#6272a4" : "#1c1c1e")};
`;

export const RoomItemText = styled.Text<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#ddd")};
  font-size: 16px;
  font-weight: bold;
`;

/* Modal */
export const ModalContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

export const ModalBackground = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const FooterModal = styled.View`
  width: 100%;
  min-height: 250px;
  background-color: #222;
  padding: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ModalView = styled.View`
  width: 100%;
  align-items: center;
`;

export const ModalInput = styled.TextInput`
  width: 90%;
  padding: 12px;
  border: 1px solid #555;
  border-radius: 8px;
  background-color: #333;
  color: #ffffff;
  margin-bottom: 12px;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #6272a4;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  width: 90%;
`;

export const ModalButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export const FooterContainer = styled.View`
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0;
  background-color: #131016;
  align-items: center;
  margin-bottom: 45px;
`;

export const NoRoomsText = styled.Text`
  color: #888;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;
