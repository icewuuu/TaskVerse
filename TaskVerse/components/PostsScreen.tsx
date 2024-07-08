import { useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { fetchPosts, fetchUsers } from "../api/api";
import { mapUserToId } from "../utilities/utils";

function PostsScreen() {
  const [posts, setPosts] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsData, usersData] = await Promise.all([
          fetchPosts(),
          fetchUsers(),
        ]);
        setPosts(postsData);
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
          {posts.map((post) => (
            <View style={[styles.boxContainer]} key={post.id}>
              <Text style={styles.title}>{post.title}</Text>
              <Text style={styles.content}>{post.body}</Text>
              <Text style={styles.userName}>
                {mapUserToId(post.userId, users)}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  filterIcon: {
    padding: 10,
    alignSelf: "flex-end",
    marginRight: 20,
  },
  boxContainer: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
    marginTop: 10,
  },
});

export default PostsScreen;
