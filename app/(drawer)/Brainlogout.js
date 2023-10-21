import { View, Image, TouchableOpacity } from "react-native";
import Container from "../component/container";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const brainout = () => {
    const user = auth.currentUser;

    const handleLogout = async () => {
        try {
            if(user != null) {
                await signOut(auth);
                await AsyncStorage.removeItem("UserInfo");
            }
            router.replace('/');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style = {Container.Homecontainer}>
            <TouchableOpacity onPress = {handleLogout}>
                <Image source = {require('../component/assets/logout.png')}/>
            </TouchableOpacity>
            <Image source = {require('../component/assets/LogoutText.png')}/>
        </View>
    )
}

export default brainout;