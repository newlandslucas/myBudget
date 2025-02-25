import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BudgetProvider } from "./context/BudgeContext";
import Home from "./screens/Home";
import AddItemScreen from "./screens/AddItemScreen";
import ListScreen from "./screens/ListScreen";

export type RootStackParamList = {
  Home: undefined;
  AddItem: undefined;
  List: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <BudgetProvider>
      <NavigationContainer>
        <StatusBar barStyle="auto" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddItem" component={AddItemScreen} />
          <Stack.Screen name="List" component={ListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BudgetProvider>
  );
};

export default App;
