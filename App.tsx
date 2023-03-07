import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { useRef, useState } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

function App() {
  const [value, setValue] = useState("Useless Placeholder");
  const inputRef = useRef<TextInput>(null);
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          backgroundColor: "#000",
        },
      ]}
    >
      <StatusBar style="light" />
      <View
        style={{
          flex: 1,
          backgroundColor: "#0090ff",
          width: "100%",
        }}
      >
        <ScrollView style={{ flexGrow: 1, backgroundColor: "#00000099" }}>
          {chat.map((item) => {
            return (
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#fff",
                }}
              >
                <View style={{ flex: 1, flexDirection: "column" }}>
                  <Text style={{ color: "#fff" }}>{item.name}</Text>
                  <Text style={{ color: "#fff" }}>{item.message}</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <Text style={{ color: "#fff" }}>{item.time}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <OptionalKeyboardView>
          <TextInput
            placeholder="Search"
            style={{
              height: 50,
              padding: 10,
              backgroundColor: "#00dffc",
              minHeight: 50,
              maxHeight: 300,
            }}
            placeholderTextColor="#000"
            multiline={true}
            ref={inputRef}
            value={value}
            onChangeText={setValue}
            onContentSizeChange={(event) => {
              inputRef.current?.setNativeProps({
                height: Math.min(
                  Math.max(event.nativeEvent.contentSize.height + 20, 50),
                  250
                ),
              });
            }}
          />
        </OptionalKeyboardView>
      </View>
    </View>
  );
}

export default function AppWrapper() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function OptionalKeyboardView({ children }) {
  const insets = useSafeAreaInsets();
  if (Platform.OS !== "android") {
    return (
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={insets.bottom + 10}
      >
        {children}
      </KeyboardAvoidingView>
    );
  }
  return children;
}

// generate some fake chat json
const chat = [
  {
    id: 1,
    name: "John",
    message: "Hello World",
    time: "10:00",
  },
  {
    id: 2,
    name: "Jane",
    message: "Hello World",
    time: "10:00",
  },
  {
    id: 3,
    name: "John",
    message: "sdfgsdfsdfgh sdfgsdfhsdfhsdfh",
    time: "10:00",
  },
  {
    id: 4,
    name: "Jane",
    message: "sskdjfnksjdnf",
    time: "10:00",
  },
  {
    id: 5,
    name: "John",
    message: "sdfsdfsdfs gsdfgsdfhsdfghdfghj",
    time: "10:00",
  },
  {
    id: 6,
    name: "Jane",
    message: "sdfsdfsdfs gsdfgsdfhsdfghdfghj",
    time: "10:00",
  },
  {
    id: 7,
    name: "Jane",
    message: "sskdjfnksjdnf",
    time: "10:00",
  },
  {
    id: 9,
    name: "John",
    message: "sdfsdfsdfs gsdfgsdfhsdfghdfghj",
    time: "10:00",
  },
  {
    id: 10,
    name: "Jane",
    message: "sdfsdfsdfs gsdfgsdfhsdfghdfghj",
    time: "10:00",
  },
];
