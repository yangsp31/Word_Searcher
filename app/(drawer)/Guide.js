import { View } from "react-native";
import Container from "../component/container";
import { Text } from "react-native";
import Style from "../component/style";
import { ScrollView } from "react-native";

const userGuide = () => {
    return (
        <ScrollView  style = {Container.  Guidecontainer} contentContainerStyle = {{ justifyContent : 'center'}}>
            <Text style = {Style.GuideText}>* 로그인을 권장 합니다. *</Text>
            <Text style = {Style.GuideText}>- 최초 로그인으로 자동 로그인까지 지원 합니다.</Text>
            <Text style = {Style.GuideText}>- 로그인 시 직접 A.I를 조작할 수 있습니다.</Text>
            <Text style = {Style.GuideText}>{'\n'}{'\n'}</Text>
            <Text style = {Style.GuideText}>{'['}default 기능{']'}</Text>
            <Text style = {Style.GuideText}>- 개념은 알지만 단어가 기억 안날때 이 앱을 사용합니다.</Text>
            <Text style = {Style.GuideText}>- 질문을 이용하여 단어를 답변으로 받습니다.</Text>
            <Text style = {Style.GuideText}>- 결론적으로 단어찾는 어플리케이션 입니다.</Text>
            <Text style = {Style.GuideText}>- 추가적인 기능을 통해 다양한 답변을 받을 수 있습니다.</Text>
            <Text style = {Style.GuideText}>{'\n'}{'\n'}</Text>
            <Text style = {Style.GuideText}>{'['}생각하기{']'}</Text>
            <Text style = {Style.GuideText}>- 모든 질문은 최대한 간결해야 합니다.</Text>
            <Text style = {Style.GuideText}>- 모든 질문에는 핵심정보가 정확히 포함되어야 합니다.</Text>
            <Text style = {Style.GuideText}>- 질문에 따라 받아볼 수 있는 답의 질이 달라집니다.</Text>
            <Text style = {Style.GuideText}>{'\n'}{'\n'}</Text>
            <Text style = {Style.GuideText}>{'['}뇌 바꾸기{']'}</Text>
            <Text style = {Style.GuideText}>- 질문에 답을 하는 A.I의 역할을 지정합니다.</Text>
            <Text style = {Style.GuideText}>- A.I의 역할에 따라 답의 형태가 달라집니다.</Text>
            <Text style = {Style.GuideText}>- 뇌 조작 버튼으로 직접 A.I의 역할을 생성/삭제 합니다.</Text>
            <Text style = {Style.GuideText}>{'\n'}{'\n'}</Text>
            <Text style = {Style.GuideText}>{'['}뇌 조작하기{']'}</Text>
            <Text style = {Style.GuideText}>- A.I의 역할에 이름을 부여해야 합니다.</Text>
            <Text style = {Style.GuideText}>- A.I의 역할을 간결하지만 자세하게 작성해야 합니다.</Text>
            <Text style = {Style.GuideText}>- 역할을 작성할 때 사소한 부분 조차도 명시 해야 합니다.</Text>
            <Text style = {Style.GuideText}>- 역할을 영어로 작성할 때 더 높은 성능을 보입니다.</Text>
            <Text style = {Style.GuideText}>- 삭제를 원하는 역할의 이름을 정확히 입력해야 합니다.</Text>
            <Text style = {Style.GuideText}>- default 역할은 삭제 할 수 없습니다.</Text>
            <Text style = {Style.GuideText}>- 이 문서 최하단에 역할 작성의 Reference가 있습니다.</Text>
            <Text style = {Style.GuideText}>{'\n'}{'\n'}</Text>
            <Text style = {Style.GuideText}>{'['}로그아웃{']'}</Text>
            <Text style = {Style.GuideText}>- 문을 터치하여 LogOut 합니다.</Text>
            <Text style = {Style.GuideText}>- LogOut을 진행하면 자동로그인 또한 해제 됩니다.</Text>
            <Text style = {Style.GuideText}>- LogOut 하여도 A.I의 역할 정보는 유지 됩니다.</Text>
            <Text style = {Style.GuideText}>{'\n'}{'\n'}</Text>
            <Text style = {Style.GuideText}> {'['}역할작성 Reference{']'}</Text>
            <Text style = {Style.GuideText}>{'('}default 역할에 사용된 역할 지정 문장입니다.{')'}</Text>
            <Text style = {Style.GuideText}>{'\n'}</Text>
            <Text style = {Style.GuideText}>Using only the correct words that are asked, you should answer the question, whether you are using what you have learned or using the current Internet search, and no sentences should be said. You have to answer only in words without formal letters. You should also answer in Korean with as many correct answers as possible. You must answer with words only and print {'{'}모르겠다...{'}'} when it is difficult to answer.</Text>
            <Text style = {Style.GuideText}>{'\n'}</Text>
            <Text style = {Style.GuideText}> {'//'} A.I는 gpt-3.5-turbo 모델을 사용했습니다.</Text>
        </ScrollView>
    )
}

export default userGuide;