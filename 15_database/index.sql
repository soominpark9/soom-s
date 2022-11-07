-- DDL
-- Data Definition Language: 데이터베이스 / 테이블 정의 언어

-- [데이터베이스 관련 명령어]
-- 1. 데이터베이스 생성 (+ 한글 인코딩)
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 2. 데이터베이스 생성 확인 (목록 조회)
SHOW databases;

-- 3. 데이터베이스 사용 선언
USE kdt;

-- 4. 데이터베이스 삭제
DROP DATABASE kdt;

-- [테이블 관련 명령어]
-- 1. 테이블 생성
-- CREATE TABLE 테이블명 (
--   필드1 값형식,
--   필드2 값형식
-- )
-- 제약 조건
-- NOT NULL : NULL 허용 x
-- AUTO_INCREMENT : 자동 숫자 증가
-- PRIMARY KEY : 기본 키
-- DEFAULT : 기본 값
-- UNIQUE : 중복 허용 x
CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(10) NOT NULL,
  age INT NOT NULL,
  address VARCHAR(100) NOT NULL
);

 CREATE TABLE member (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age int(2),
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'X'     
 );

-- 2. 테이블 목록 확인
SHOW tables;

-- 3. 테이블 구조 확인
DESC user;
DESC member;
-- 4. 테이블 삭제
-- DROP : 다 삭제 (구조 자체를 삭제)
-- TRUNCATE : 초기화 (모든 행 삭제)
DROP TABLE user;
TRUNCATE TABLE user;

-- 5. 테이블 수정 (구조 수정)
-- 5-1. 컬럼 추가 (ADD)

ALTER TABLE user ADD new_column VARCHAR(10);

-- 5-2. 컬럼 수정 (MODIFY)
ALTER TABLE user MODIFY new_column INT;

-- 5-3. 컬럼 삭제 (DROP)
ALTER TABLE user DROP new_column;


ALTER TABLE member MODIFY name NOT NULL;



--##################################################################

--DML
--Data Manipulation Language : 데이터 조작어
--내부 데이터를 관리하기 위한 내부언어


CREATE TABLE user (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(10) NOT NULL,
  age INT NOT NULL,
  address VARCHAR(100)
);

DESC (table명); --생성한 테이블 구조 항상 확인


--[CREATE - INSERT]
--데이터 추가 할수 있는 명령어
--참고) AUTO_INCREMENT 컬럼의 값은 굳이 넣지 않으면 알아서 증가 하거나 
--NULL 이라고 넣으면 알아서 숫자가 지정되기도 한다
--주의할 점) AUTO_INCREMENT를 지정하는 컬럼은 반드시 PK(기본키, primary key)여야 한다

INSERT INTO user (name, age, address) VALUES ('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES ('이지수', 30, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES ('최솔이', 22, '대구광역시 동구');
INSERT INTO user (name, age, address) VALUES ('한소희', 25, '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUES ('정세희', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES ('이한이', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('이지은', 32, '부산광역시 동구');
INSERT INTO user (name, age, address) VALUES ('윤세희', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES ('박수진', 26, '충청남도 공주시');
INSERT INTO user (name, age, address) VALUES ('박찬희', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('권희수', 36, '서울특별시 영등포구');




--################################################################

--[READ - SELECT]
--데이터 읽기(조회)
-- * :all 을 의미한다

SELECT * FROM user; --해당 테이블의 "전체 데이터"를 조회 할 수 있다 <항상 데이터 잘들어갔는지 해당 명령어로 확인 해야 한다 !!>
SELECT name FROM user; --이름 컬럼만 조회 할 수 있다
--위에 id , name, age address로 순서로 만들어져 있는데 순서 바꿔서 조회 하고 싶다면 아래처럼
SELECT age, name FROM user; -- 나이,이름 컬럼 조회
SELECT id, address FROM user; --idㅡ 주소 컬럼 조회


--WHERE절: 특정 조건을 만족하는 형 (record, tuple) 선택
SELECT * FROM user WHERE age >= 25; -- 나이가 25 이상인 사람의 정보를 확인 할 수 있다
SELECT * FROM user WHERE id=7; --id가 7인 사람을 조회 할 수 있다. (id가 7인 사람의 모든 데이터가 조회됨)
SELECT name FROM user WHERE id=7; --id가 7인 사람의 이름만 조회
SELECT id , age FROM user WHERE name ='이지은' ; --이름이 이지은인 사람의 id,age조회

--ORDER BY절 : 데이터 정렬
--ASC: 오름차순 (기본값)
--DESC: 내림차순

SELECT * FROM user ORDER BY age DESC; --age 컬럼 내림차순으로 조회하겠다 라는 뜻
--where이랑 같이 쓸 수도 있다
SELECT * FROM user WHERE id > 6 ORDER BY age ASC; --id 6초과인 사람 중에서 age컬럼 오름차순으로 조회 할 수 있다
SELECT * FROM user ORDER BY name ASC; --이름을 기준으로 오름차순 정렬을 하면 가나다 순으로 정렬됨 <숫자만 정렬 할 수 있는게 아니라 문자도 정렬 할 수 있다>


-- LIKE: 패턴 조회
-- % : 0개 이상의 문자를 의미
-- _ :1개의 단일 문자를 의미
SELECT * FROM user WHERE address LIKE '서울%'; --즉 이 문장은 '서울'로 시작하는 주소인 데이터를 모두 조회 한다 라는 뜻
SELECT * FROM user WHERE name LIKE '__희'; --이름의 마지막 글자가 '희' 인 사람의 데이터를 조회 한다 라는 뜻 
SELECT * FROM user WHERE name LIKE'%희%'; --이름에 '희'가 들어가는 데이터를 모두 볼 수 있다 라는 뜻 00희 0희0 희00 등
SELECT * FROM user WHERE address LIKE'%광역%'; --주소에 '광역'이 포함된 데이터를 조회 할 수 있다
SELECT * FROM user WHERE name LIKE '__희' ORDER BY age DESC;
--이름의 마지막 글자가 '희'인 사람들을 나이 기준으로 내침차순해서 보여준다 <SELECT에서 오늘배운 3개를 동시에 쓰는 방법>


--LIMIT : 데이터 개수 제한
SELECT * FROM user LIMIT 3;
SELECT * FROM user WHERE address LIKE'서울%' LIMIT 2; -- 주소가 서울인 사람들 중에 2명만 보여주세요 라는 뜻

--BETWEEN a AND b : 사이값 조회
SELECT * FROM user WHERE age BETWEEN 25 AND 30; --나이가 25부터30살 사이인 사람들을 조회하겠습니다

--IN (list): 리스트 있는 것 중에 일치하면 참
SELECT * FROM user WHERE age IN (20,21,,22,23); --나이 중에 해당 나이가 있는 사람들을 조회하겠습니다

--IS NULL
--IS NOT NULL 
INSERT INTO user (name ,age) VALUES('서현승', 28); --주소 안넣어서 주소가 NULL값으로 나옴
SELECT * FROM user;

SELECT * FROM user WHERE address IS NULL; --주소가 NULL인 사람만 조회됨
SELECT * FROM user WHERE address IS NOT NULL; --주소가 NULL값이 아닌 사람들 조회됨

--논리 연산자: AND, OR, NOT
SELECT * FROM user WHERE address IS NOT NULL and age  < 25; --주소가 없고 나이가 25살 이하인 사람  동시에 만족해야함 해당 조건을 
SELECT * FROM user WHERE address IS NOT NULL or age  < 25; --주소가 없고 나이가 25살 이하인 사람  두조건 중에 하나만 만족 해도 조회할 수 있다
SELECT * FROM user WHERE name LIKE '이%' AND age =23; --성이 '이'씨이고 나이가 23살인 사람을 조회 할 수 있다


--################################################################

--[UPDATE - UPDATA]
-- 데이터 갱신(수정)
--참고) error code 1175 -> table 데이터를 update/delete하려고 할때 key 컬럼을 이용해서 수정 /삭제하는것이 바람직하다 그렇지 않을경우 에러가 뜰 수 있다

--UPDATE user SET address ='서울특별시 강북구' WHERE name='이한이'  --이름이 이한이 라는 사람의 주소를 바꾼다 (이름을 기준으로 주소값을 바꾼다)
--키 값을 기준으로 수정하는 것이 바람직하다 왜냐하면 name이 겹칠 수도 있기 때문에 원래는 키 값을 기준으로 해야한다.

UPDATE user set address='서울 특별시 강북구' WHERE id =1; --이름이 이한이 라는 사람의 주소를 바꾼다 (이름을 기준으로 주소값을 바꾼다)
UPDATE user SET address='제주 특별자치도 제주시', name='이지현' WHERE id =2;  --2번사람의 이름을 바꾸고 주소를 바꾼다.

--주의) update where절 미사용시, 모드 행의 데이터가 변경된다
--update에서는 where절이 항상 따라다님


--################################################################

--[DELETE - DELETE]
-- : 데이터 삭제
-- 주의) delete where절 미사용시, 모든 행의 데이터가 삭제됨
--delete 에서는 where절이 항상 따라다님

DELETE FROM user WHERE id =11;
DELETE FROM user WHERE id >8;


--################################################################


CREATE TABLE practice (
  id VARCHAR(10) NOT NULL PRIMARY KEY,
  pw VARCHAR(20) NOT NULL,
  name VARCHAR(5) NOT NULL,
  gender ENUM('F', 'M', '') default'',
  birthday DATE NOT NULL,
  age int(3) NOT NULL default'0'
);



INSERT INTO practice (id, pw, name, gender, birthday, age) VALUES ('hong1234', '8o4bkg', '홍길동', 'm', 1990-01-31, 33);
INSERT INTO practice (id, pw, name, gender, birthday, age) VALUES ('sexysung', '87awjkdf', '성춘향', 'f', '1992-03-31', 31);
INSERT INTO practice (id, pw, name, gender, birthday, age) VALUES ('power70', 'qxur8sda', '변사또', 'm', '1970-05-02', 53);
INSERT INTO practice (id, pw, name, gender, birthday, age) VALUES ('hanjo', 'jk48fn4', '한조', 'm', '1984-10-18', 39);
INSERT INTO practice (id, pw, name, gender, birthday, age) VALUES ('widowmaker', '38ewifh3', '위도우', 'f', '1976-06-27', 47);
INSERT INTO practice (id, pw, name, gender, birthday, age) VALUES ('dvadva', 'k3fah', '송하나', 'f', '2001-06-03', 22);
INSERT INTO practice (id, pw, name, gender, birthday, age) VALUES ('jungkrat', '4ifha7f', '정크랫', 'm', '1999-11-11', 24);


SELECT * FROM practice;



SELECT * FROM practice ORDER BY birthday ASC;
SELECT * FROM practice WHERE gender='m' ORDER BY name DESC;
SELECT id, name FROM practice WHERE birthday LIKE '1990%';
SELECT * FROM practice WHERE birthday LIKE '%-06-%' ORDER BY birthday ASC;
SELECT * FROM practice WHERE birthday LIKE '1970-%-%' AND gender='m';
SELECT * FROM practice ORDER BY age DESC LIMIT 3;
SELECT * FROM practice WHERE age<51 AND age>24;
UPDATE practice set pw='12345678' WHERE id ='hong1234';
DELETE FROM practice WHERE id = 'jungkrat';



--######################################################################################

--DCL
--Data Control Language : 데이터 제어어
--데이터베이스에 접근해 읽거나 쓰는 것을 제한할 수 있는 권한 부여/박탈
--root말고 다른 사용자들도 있을텐데 그 다른 사용자들이 데이터베이스를 건드리지 못하도록 하는 것을 DCL이라고 한다.

--GRANT : 특정 데이터베이스 사용자에게 특정 작업에 대한 수행 "권한 부여"
--REMOVE : 특정 데이터베이스 사용자에게 특정 작업에 대한 수행 "권한 박탈"

mysql -y root -p 





