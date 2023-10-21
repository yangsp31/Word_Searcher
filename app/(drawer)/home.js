import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator } from "react-native"
import Container from "../component/container";
import Style from "../component/style";
import {  useState } from "react";
import axios from "axios";
import { getRole } from "../function/db";

const SearchPage = () => {
    const [result, setresult] = useState("");
    const [question, setquestion] = useState("");
    const [loading, setloading] = useState(false);

    const chatGPT = async () => {
        setloading(true);

        try {
            const config = {
                headers : {
                    'Content-Type' : 'application/json',
                    'Authorization' : //your openai key
                },
            };

            const body = {
                model : 'gpt-3.5-turbo',
                messages : [
                    {
                        role : 'system',
                        content : await getRole()
                    },
                    {
                        role : 'user',
                        content : question
                    }
                ],
                temperature : 0.7,
                max_tokens : 100
            };

            const gptresult = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                body,
                config
            );

            if (gptresult.data.choices && gptresult.data.choices.length > 0) {
                setloading(false);
                setresult(gptresult.data.choices[0].message.content);
              } else {
                setresult("No response was received from the model.");
              }
            } catch (error) {
                setresult("Error occurred while getting the response.");
                console.error("Error calling GPT-3.5 Turbo:", error);
            }
    };

    return(
        <View style = {Container.Homecontainer}>
        <ScrollView style = {Container.Scrollcontainer}>
            <Image source={require('../component/assets/Thinking.png')}/>
            <View style = {Container.Thiscontainer}>
                <TouchableOpacity disabled={!question} onPress={chatGPT}>
                    <Image source = {(question) ? require('../component/assets/This.png') : null}/>
                    <ActivityIndicator size = 'large' animating = {loading}/>
                </TouchableOpacity>
            </View>
            <Text style = {Style.SelectText}>{result}</Text>
        </ScrollView>
        <TextInput value = {question} onChangeText={setquestion} placeholder = 'Enter question' placeholderTextColor="#aaa" multiline={true} style = {Style.Searchinput}/>
        </View>
    );
};

export default SearchPage;