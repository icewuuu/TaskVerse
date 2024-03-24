import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { fetchTodos, fetchUsers } from "../api/api";
import { mapUserToId } from "../utilities/utils";
import styles from "../styles/styles";

function TodosScreen() {
  const [todos, setTodos] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);

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
    <ScrollView style={{ flex: 1 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {todos.map((todo) => (
          <View
            style={[
              styles.todoContainer,
              { borderColor: todo.completed ? "green" : "blue" },
            ]}
            key={todo.id}
          >
            <Text style={styles.todoContent}>
              {todo.completed ? "Done" : "In Progress"}
            </Text>
            <Text style={styles.todoTitle}>{todo.title}</Text>
            <Text style={styles.todoTitle}>
              {mapUserToId(todo.userId, users)}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default TodosScreen;
