import React from "react";
import { Modal, TouchableOpacity, View, Text, StyleSheet } from "react-native";

const MessageMenuComponent = ({ visible, onClose, onBlock, onDelete, onReport }) => {
  if (!visible) {
    return null;
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={onDelete}>
            <Text style={styles.menuItemText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={onBlock}>
            <Text style={styles.menuItemText}>Block</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={onReport}>
            <Text style={styles.menuItemText}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  menu: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    minWidth: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  menuItem: {
    paddingVertical: 14,
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 18,
    color: "#333",
  },
  closeButton: {
    paddingVertical: 14,
    width: "100%",
    alignItems: "center",
    marginTop: 16,
  },
  closeButtonText: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
});
export default MessageMenuComponent;
