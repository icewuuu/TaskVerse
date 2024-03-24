import { useState } from "react";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TodosScreen from "./components/TodosScreen";
import styles from "./styles/styles";
import FilterModal from "./components/FilterModal";

const Drawer = createDrawerNavigator();

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            width: 250,
          },
          swipeEnabled: true,
          swipeEdgeWidth: 100,
          headerRight: () => (
            <TouchableOpacity
              style={styles.filterIcon}
              onPress={() => setModalVisible(true)}
            >
              <Ionicons name="filter" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
        initialRouteName="Todos"
      >
        <Drawer.Screen
          name="Todos"
          component={TodosScreen}
          options={{
            drawerLabel: () => <Text>Todos</Text>,
          }}
        />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
