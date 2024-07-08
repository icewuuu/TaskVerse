import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { fetchTodos, fetchUsers } from "../api/api";
import { mapUserToId } from "../utilities/utils";
import styles from "../styles/styles";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FilterModal from "./FilterModal";

function TodosScreen() {
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const [todos, setTodos] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [todosData, usersData] = await Promise.all([
          fetchTodos(),
          fetchUsers(),
        ]);
        setTodos(todosData);
        setUsers(usersData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <TouchableOpacity style={styles.filterIcon} onPress={toggleModal}>
          <Ionicons name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {todos.map((todo) => (
            <View
              style={[
                styles.boxContainer,
                { borderColor: todo.completed ? "green" : "blue" },
              ]}
              key={todo.id}
            >
              <Text style={styles.title}>
                {todo.completed ? "Done" : "In Progress"}
              </Text>
              <Text style={styles.content}>{todo.title}</Text>
              <Text style={[styles.title, { color: "#007bff" }]}>
                {mapUserToId(todo.userId, users)}
              </Text>
            </View>
          ))}
        </View>
        <FilterModal
          modalVisible={modalVisible}
          onClose={toggleModal}
          authors={[
            { id: -1, name: "" },
            ...users.map((user) => ({ id: user.id, name: user.name })),
          ]}
          states={[" ", "Done", "In Progress"]}
        />
      </ScrollView>
    </View>
  );
}

export default TodosScreen;
