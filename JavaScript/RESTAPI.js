/*  REST(Representational State Transfer)는 HTTP/1.0과 1.1 스펙작성에 참여하였고 아파치 HTTP 서버 프로젝트의 공동 설립자인 로이필딩의 2000년 논문에서 처음 소개
    발표당시 웹이 HTTP의 설계상 우수성을 제대로 사용하지 못하고 있는 상황을 보고 웹의 장점을 최대한 활용할 수 있는 아키텍쳐로 REST를 소개하였고
    이는 HTTP 프로토콜을 의도에 맞게 디자인하도록 유도하고 있다. REST의 기본원칙을 성실히 지킨 서비스 디자인을 "RESTful"이라고 표현한다. */



/* 1. REST API 중심 규칙 */
//REST에서 가장 중요한 기본적인 규칙은 두가지이다. RUI는 자원을 표현하는데에 집중하고 행위대한 정의는 HTTP Method를 통해 하는것이 REST한 API를 설계하는 중심규칙이다.

//1.1 URI는 정보의 자원을 표현해야한다.
//리소스명은 동사보다는 명사를 사용한다. RUI는 자원을 표현하는데 중점을 두어야한다. get같은 행위에 대한 표현이 들어가서는 안된다.
/* Bad case
    GET /getTodos/1
    GET /todos/show/1
    
   Good case
    Get /todos/1
*/

//1.2 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)등으로 표현한다.

/* Bad case
    GET /todos/delete/1

   Godd case
    DELETE todos/1
*/

/* 2. HTTP Method */
//주로 5가지의 Method(GET,POST,PUT,PATCH,DELETE)를 사용하여 CRUD를 구현한다.
/*  Method	 Action	        역할	                   페이로드
    GET	  index/retrieve	모든/특정 리소스를 조회	    x
    POST	create	        리소스를 생성	           ○
    PUT	    replace	        리소스의 전체를 교체	    ○
    PATCH	modify	        리소스의 일부를 수정	    ○
    DELETE	delete	        모든/특정 리소스를 삭제	    x
*/

/* 3. REST API의 구성 */
//REST API는 자원(Resource), 행위(Verb), 표현(Representations)의 3가지 요소로 구성된다. 
//REST는 자체 표현 구조로 구성되어 REST API만으로 요청을 이해할 수 있다.

/* 구성 요소	           내용	                   표현 방법
    Resource	          자원	                   HTTP URI
    Verb	             자원에 대한 행위	        HTTP Method
    Representations	     자원에 대한 행위의 내용	HTTP Message Pay Load */


/* 4. REST API의 Example */
//4.1 json-server



