import {  Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native"
import Style from "./component/style";
import Container from "./component/container";
import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebaseConfig";
import { createDB } from "./function/db";
import { router } from "expo-router";

const SingupPage = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [checkpassword, setcheckpassword] = useState('');
    const [loading, setloading] = useState(false);

    const handleSingupButton = async () => {
        if(email != '' && password != '' && checkpassword == password) {
            try {
                setloading(true);
                await createUserWithEmailAndPassword(auth, email, password);
                await createDB();
                setloading(false);
                router.back();
            } catch (e) {
                console.log(e);
            }
        } else {
            setError("Passwords don't match");
        }
    }

    return (
        <View style = {Container.Maincontainer}>
            <TextInput value = {email} onChangeText={setemail} keyboardType = 'email-address' placeholder = 'Enter email address' autoCapitalize = 'none' placeholderTextColor="#aaa" style = {Style.input}/>
            <TextInput value = {password} onChangeText={setpassword} secureTextEntry placeholder = 'Enter password' autoCapitalize = 'none' placeholderTextColor="#aaa" style = {Style.input}/>
            <TextInput value = {checkpassword} onChangeText={setcheckpassword} secureTextEntry placeholder = 'Check password' autoCapitalize = 'none' placeholderTextColor="#aaa" style = {Style.input}/>
            
            <TouchableOpacity disabled={!email || !password || !checkpassword} onPress = {handleSingupButton}>
              <Text style = {{fontSize : 28, fontWeight : 'bold', color : (!email || !password || !checkpassword) ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 1)'}}>SingUp</Text>
            </TouchableOpacity>
            <ActivityIndicator size = 'large' animating = {loading}/>
        </View>
    )
}

export default SingupPage;