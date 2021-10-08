import { placeholder } from "@babel/types";
import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";

import { TextInput, Button, Checkbox } from "react-native-paper";
import { SocialIcon } from "react-native-elements";

const Login = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.Logo}>
          <Image
            source={{
              uri: "https://hdsotomasyon.com/wp-content/uploads/2018/04/logo.png",
            }}
            style={{ width: 230, height: 70 }}
          />
        </View>
      </SafeAreaView>

      <View
        style={{
          paddingBottom: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: "#F2F2F2",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 18,
          }}
        >
          Hesap Oluştur
        </Text>
      </View>
      <View style={styles.container2}>
        <View style={{ paddingTop: 10 }}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <SocialIcon style={{ marginLeft: 10 }} light type="facebook" />

            {Platform.OS == "android" ? (
              <SocialIcon style={{ marginLeft: 10 }} light type="google" />
            ) : Platform.OS == "ios" ? (
              <SocialIcon
                light
                style={{ marginLeft: 20 }}
                iconColor="#000"
                type="apple"
              />
            ) : (
              <SocialIcon style={{ marginLeft: 20 }} light type="google" />
            )}
            <SocialIcon style={{ marginLeft: 10 }} light type="instagram" />
          </View>
        </View>

        <View>
          <TextInput
            style={Platform.OS === "web" ? styles.inputweb : styles.input}
            mode="outlined"
            label="E-mail"
            theme={{ roundness: 10, colors: { primary: "#1BB273" } }}
          />
          <TextInput
            style={Platform.OS === "web" ? styles.inputweb : styles.input}
            mode="outlined"
            label="İsim Soyisim"
            theme={{ roundness: 10, colors: { primary: "#1BB273" } }}
          />
          <View style={styles.borderStyle}>
            <TextInput
              style={Platform.OS === "web" ? styles.inputweb : styles.input}
              mode="outlined"
              label="Şifre"
              theme={{ roundness: 10, colors: { primary: "#1BB273" } }}
            />
          </View>
        </View>

        <View
          style={
            Platform.OS === "web"
              ? styles.GirisYapButtonWeb
              : styles.GirisYapButton
          }
        >
          <Button
            icon="login"
            mode="contained"
            color="#1BB273"
            style={{ height: 55, justifyContent: "center", borderRadius: 30 }} // justifyContent: "center" ortalar.
            contentStyle={{ height: 50, justifyContent: "center" }} // eğer bunu eklemezsen butona tıklayınca tıklama alanın kücük gözükür.
            //  onPress={alert}
          >
            Kayıt Ol
          </Button>
          <Text style={{ paddingTop: 10, textAlign: "center" }}>
            Hesabınız var mı?{" "}
            <Text style={{ color: "#1BB273" }}>Giriş Yap</Text>{" "}
          </Text>
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: "#1BB273",
    justifyContent: "center",
  },
  container2: {
    flex: 0.6,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
  },

  input: {
    height: 50,
    marginRight: 50,
    marginLeft: 50,
    padding: 3,
    backgroundColor: "#fff",
  },

  inputweb: {
    height: 50,
    alignSelf: "center",
    width: "40%",
    padding: 7,
    backgroundColor: "#fff",
  },
  GirisYapButton: {
    margin: 5,
    marginRight: 45,
    marginLeft: 45,
    padding: 3,
  },

  GirisYapButtonWeb: {
    margin: 5,
    alignSelf: "center",
    width: "40%",
    padding: 10,
  },
  Logo: {
    alignItems: "center",
    alignContent: "space-between",
  },
});
