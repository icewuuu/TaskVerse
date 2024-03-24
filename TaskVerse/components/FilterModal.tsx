import React, { useState } from "react";
import { Modal, View, Button, Text } from "react-native";

const FilterModal = () => {
  console.log("FilterModal");
  const [modalVisible, setModalVisible] = useState(false);

  const handleFilter = () => {
    // Handle your filter logic here
    console.log("Filter applied");
    setModalVisible(false);
  };

  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>

            <Button
              title="Hide Modal"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />

            <Button title="Apply Filter" onPress={handleFilter} />
          </View>
        </View>
      </Modal>

      <Button
        title="Show Modal"
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
};

export default FilterModal;
