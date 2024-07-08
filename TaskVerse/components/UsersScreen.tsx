import { useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { fetchUsers } from "../api/api";

function UsersScreen() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersData] = await Promise.all([fetchUsers()]);
        setUsers(usersData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {users.map((user) => (
            <View style={styles.boxContainer} key={user.id}>
              <Text style={styles.title}>{user.name}</Text>
              <Text style={styles.subtitle}>@{user.username}</Text>
              <Text style={styles.email}>{user.email}</Text>
              <View style={styles.addressContainer}>
                <Text style={styles.address}>
                  {user.address.street}, {user.address.suite}
                </Text>
                <Text style={styles.address}>
                  {user.address.city}, {user.address.zipcode}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "600",
    color: "#007bff",
  },
  email: {
    fontSize: 14,
    color: "#787878",
    marginBottom: 8,
  },
  addressContainer: {
    backgroundColor: "#F0F0F0",
    padding: 8,
    borderRadius: 4,
    marginBottom: 12,
  },
  address: {
    fontSize: 12,
    color: "#606060",
  },
  boxContainer: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 4,
  },
});

export default UsersScreen;
