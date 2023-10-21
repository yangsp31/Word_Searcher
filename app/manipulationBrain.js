import { View } from "react-native";
import Container from "./component/container";
import { TextInput } from "react-native";
import { useState } from "react";
import Style from "./component/style";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { deleteRole, setRole } from "./function/db";
import { router } from "expo-router";
import { Alert } from "react-native";

const addbrain = () => {
    const [title, setTitle] = useState("");
    const [role, setaddRole] = useState("");
    const [braindelete, setbraindelete] = useState("");

    const handleButton = async () => {
        if(title && role) {
            setRole(title, role);
            router.replace('/gptbrain');
        }
        else if(braindelete) {
            if(braindelete == "default") {
                Alert.alert("경고", "default는 삭제 할 수 없습니다.")
            }
            else {
                await deleteRole(braindelete)
                router.replace('/gptbrain');
            }
        }
    }

    return (
        <ScrollView  style = {Container. addBrainScrollcontainer} contentContainerStyle = {{ justifyContent : 'center', alignItems : 'center'}}>
            <TextInput value = {title} onChangeText={setTitle} placeholder = 'Enter Brain name' placeholderTextColor="#aaa" multiline={true} style = {Style.Titleinput} editable = {!braindelete}/>
            <TextInput value = {role} onChangeText={setaddRole} placeholder = 'Enter Brain role' placeholderTextColor="#aaa" multiline={true} style = {Style.Roleinput} editable = {!braindelete}/>
            <TextInput value = {braindelete} onChangeText={setbraindelete} placeholder = 'Enter the Brain Name then Delete' placeholderTextColor="#aaa" multiline={true} style = {Style.Roleinput} editable = {!title && !role}/>
            <TouchableOpacity disabled={(!title || !role) && !braindelete} onPress={handleButton}>
                <Image source={(title && role || braindelete) ? require('./component/assets/ThisAdd.png') : null}/>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default addbrain;