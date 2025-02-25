import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BudgetProvider } from "./context/BudgeContext";
import Home from "./screens/Home";
// import AddItemScreen from "./src/screens/AddItemScreen";
// import ListScreen from "./src/screens/ListScreen";
// import SummaryScreen from "./src/screens/SummaryScreen";
import { RootStackParamList } from "./types/navigation"; // Importa os tipos das rotas

const Stack = createNativeStackNavigator<RootStackParamList>(); // Aplica a tipagem

const App: React.FC = () => {
  return (
    <BudgetProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          {/* <Stack.Screen name="AddItem" component={AddItemScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Summary" component={SummaryScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </BudgetProvider>
  );
};

export default App;
