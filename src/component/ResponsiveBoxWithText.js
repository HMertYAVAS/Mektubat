import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CheckBox from "react-native-check-box";

const ResponsiveBoxWithText = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Ionicons name="close" size={30} color="#333" />
            </TouchableOpacity>
            <ScrollView>
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
                euismod tortor, molestie laoreet lacus. Sed vitae tristique ex,
                convallis scelerisque nunc. Morbi consectetur, dolor at
                sollicitudin euismod, mi leo aliquet mauris, sed molestie dolor
                odio eget sem. Maecenas ornare augue ut ante varius, et
                ullamcorper lacus rhoncus. Nunc ut tempus lorem. Aliquam in
                ligula consectetur, iaculis arcu non, pharetra nulla. Nam ac
                diam in odio congue aliquam. Phasellus semper neque vel felis
                consequat lobortis. Cras massa quam, porta ultrices est
                malesuada, scelerisque varius arcu. Fusce augue augue, commodo
                sed leo sed, facilisis molestie neque. Ut sed feugiat massa,
                vitae pharetra mauris. Nam sed leo molestie, bibendum magna
                iaculis, ullamcorper mauris. Nam eu vehicula tellus. Maecenas
                efficitur velit ex, sit amet pellentesque ligula gravida eget.
                Sed eu justo sed leo tincidunt vestibulum in ac nisi.
                Pellentesque dapibus, nisl eu malesuada maximus, eros nulla
                commodo libero, in rhoncus urna magna in est. Mauris
                pellentesque dolor in laoreet commodo. Aliquam hendrerit
                volutpat lacus et porttitor. Phasellus mattis sodales enim, id
                lacinia mi molestie rutrum. Duis interdum efficitur interdum.
                Proin non metus ut odio tincidunt venenatis semper vitae massa.
                Donec a tellus tellus. Sed sodales laoreet felis. Nulla vehicula
                dolor in sapien bibendum commodo. Maecenas convallis magna nec
                consequat tincidunt. Donec vulputate eu ex non cursus. Maecenas
                tristique tristique neque, ut molestie ipsum elementum eu. Duis
                ac faucibus nibh. Sed tristique ultricies consectetur. Nunc
                turpis ligula, eleifend in mattis sed, commodo eu nulla.
                Phasellus consectetur risus et suscipit laoreet. Aliquam
                tincidunt augue vel sem fermentum, a feugiat urna rhoncus.
                Curabitur vulputate nunc sem, sed varius orci tristique sit
                amet. Phasellus a tincidunt lectus. Vestibulum condimentum sit
                amet mi et faucibus. Nulla quis justo quis arcu interdum
                elementum in in odio. Integer dapibus faucibus ornare. Nulla
                facilisis lorem arcu, non auctor mauris pulvinar eget.
                Pellentesque egestas magna felis, eget aliquam purus gravida ac.
                Etiam congue congue ultricies. Morbi ut enim ipsum. Aliquam
                ultricies vehicula lobortis. Suspendisse egestas diam a
                fringilla sodales. Duis sit amet gravida massa, sit amet cursus
                est. Ut non velit iaculis eros imperdiet facilisis et sit amet
                dui. Integer scelerisque posuere dictum. Morbi molestie arcu id
                libero imperdiet, et ultrices orci imperdiet. Vestibulum risus
                nisl, pretium eget urna a, vehicula interdum ipsum. Aliquam
                aliquet id nisi nec varius. Mauris non eros fringilla, ultricies
                lacus non, cursus leo. Etiam finibus varius est volutpat tempor.
                Phasellus in ante vitae sapien vehicula aliquet. Praesent eget
                tincidunt risus, nec tempus mi. Quisque nec massa a lectus
                posuere finibus. Morbi elementum cursus velit at accumsan.
                Aliquam posuere eu lectus non accumsan. Proin fermentum tortor
                placerat, sollicitudin turpis nec, ornare nisl. Suspendisse leo
                augue, luctus vitae pellentesque ac, pharetra sed lectus.
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <View style={{flexDirection:"row"}}>
        <CheckBox
          onClick={() => setIsChecked(!isChecked)}
          isChecked={isChecked}
          uncheckedCheckBoxColor="white"
          checkBoxColor="white"
        />
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.openButton}
        >
          <Text style={styles.openButtonText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    borderRadius: 5,
  },
  openButtonText: {
    color: "white",
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalBox: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").width / 0.5,
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
});

export default ResponsiveBoxWithText;
