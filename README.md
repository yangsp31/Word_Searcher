# Word Searcher - Chat GPT역할 설정에 따른 질답 프로그램 (Mobile application)

* 2023.10.18. - 2023.10.25.
* 1인 프로젝트로 진행
<br><br><br>

# 개요

* Chat GPT 사용자들에게 보다 간편하게 원하는 응답을 도출할 수 있는 환경을 제공.
* 사용자가 역할을 설정하지 않았다면 default역할을 이용하여 질답을 통해 단어를 찾아내는 기능으로 사용.
* 역할 설정을 통해 원하는 형태로 질답을 진행 할 수 있음.
<br><br>

# Architecture
![image](https://github.com/user-attachments/assets/081e12e2-02a2-4e85-a10b-34baa188a463)
<br><br>

# ERD
![WSERD](https://github.com/user-attachments/assets/2afcd70c-de0f-4051-bd85-5908e4e2599f)
<br><br><br>

![WSFirebase](https://github.com/user-attachments/assets/fd9df013-f9aa-4ed9-8404-44ce40ed8624)
<br><br>

# Screen
![WSHome](https://github.com/user-attachments/assets/b5514d9a-dbfe-4158-8d46-8ab1f77efa1b)

![WSChangeBrain](https://github.com/user-attachments/assets/d3581507-5483-4982-b5f3-01b78d55bb1b)

![WSSetPrompt](https://github.com/user-attachments/assets/d6ec7ab0-82a8-4b1a-abd9-80f4e3e90d76)
<br><br>

# 사용기술

* ### react-native (expo)
  * 낮은 학습곡선과 빠른 생산성이라는 장점을 가지며, 프로젝트 요구사항중 native 기능과 모듈이 필요한 부분이 없다고 판단하여 선택.

* ### openai의 gpt-3.5-turbo API
  * 프로젝트 목적이 높은 성능의 LLM을 사용하여 질답을 하는 것이므로 별도의 설정과 구축과정 없이 간편하게 사용가능하여 선택.
 
* ### FireBase
  * 복잡하고 다양한 데이터를 관리할 필요가 없고, 서버리스 프로젝트이기 때문에 사용.
<br><br>

# 회고 & 개선 필요사항/방법 (회고 원문 : [Velog](https://velog.io/@yang_seongp31/WordSearcher))

* ### 자동 로그인
  *  사용자의 email과 password를 Local Storage에 저장.
  *  FireBase를 사용하였기에 FireBase에서 지원하는 자동 로그인 방식을 채용할 수 있었음.
  *  혹은, Local Storage에 FireBase에서 사용자가 회원 가입시 발행하는 UUID를 저장하고 이후에 쿼리를 통해 자동 로그인을 진행 할수도 있었음.
  *  그렇기에 단순히 사용자의 email과 password를 Local Storage에 저장하여 자동 로그인을 구현한 점은 1차원적 생각이라 판단.
 
* ### 개선 필요사항/방법
  *  FireBase에서 지원하는 자동 로그인 방식을 채용 하거나, 자동 로그인시 필요한 유저 데이터를 FireBase에서 사용자가 회원 가입시 발행하는 UUID로 선택하여 Local Storage에 저장.



