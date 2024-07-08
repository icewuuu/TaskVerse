import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";
import TodosScreen from "./components/TodosScreen";
import PostsScreen from "./components/PostsScreen";
import UsersScreen from "./components/UsersScreen";
import AlbumsScreen from "components/AlbumsScreen";
import PhotosScreen from "components/PhotosScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Todos">
        <Drawer.Screen
          name="Todos"
          component={TodosScreen}
          options={{
            drawerLabel: () => <Text>Todos</Text>,
          }}
        />
        <Drawer.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            drawerLabel: () => <Text>Posts</Text>,
          }}
        />
        <Drawer.Screen
          name="Users"
          component={UsersScreen}
          options={{
            drawerLabel: () => <Text>Users</Text>,
          }}
        />
        <Drawer.Screen
          name="Albums"
          component={AlbumsScreen}
          options={{
            drawerLabel: () => <Text>Albums</Text>,
          }}
        />
        <Drawer.Screen
          name="Photos"
          component={PhotosScreen}
          options={{
            drawerLabel: () => <Text>Photos</Text>,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
