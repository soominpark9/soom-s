-- 데이터베이스 목록보기
show databases;

use kdt;

DELETE FROM visitors WHERE id>2;

-- 데이터베이스를 새롭게 생성하고 싶다면?
CREATE DATABASE KDT DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
-- kdt 자리에 새로운 데이터베이스 이름을 쓰면됨

-- 데이터베이스 내 테이블 목록보기
show tables;

-- ##############
-- DDL 
-- 테이블 생성

CREATE TABLE visitors (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

-- 잘 생성됬는지 테이블 구조 확인
DESC visitors


-- DML

-- 테이블 전체 테이터를 조회( read 역할 )
SELECT * FROM visitors;

-- 테이블 데이터 추가( create 역할 )
INSERT INTO visitors (name,comment) VALUES ('홍길동', '내가 왔다');
INSERT INTO visitors (name,comment) VALUES ('이찬혁', '으라차차');



-- DCL
-- mysql 사용자 추가 (user계정)
CREATE USER 'user'@'%' IDENTIFIED BY '1234aa';
-- user 계정에 db권한을 줘야 한다 (우리는 모든 db에 접근 가능하게 설정)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 mysql 캐시 지우고 새로운 설정 적용
FLUSH PRIVILEGES;



-- 비밀번호 변경하고 싶다면?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234aa';

