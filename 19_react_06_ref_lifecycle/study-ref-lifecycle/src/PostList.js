import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import PostItem from "./PostItem";

//가짜 데이터 (배열)
//https://jsonplaceholder.typicode.com/posts
// const fakePosts = [
//   {
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
//   },
//   {
//     id: 2,
//     title: "qui est esse",
//     body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
//   },
//   {
//     id: 3,
//     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
//   },
//   {
//     id: 4,
//     title: "eum et est occaecati",
//     body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
//   },
//   {
//     id: 5,
//     title: "nesciunt quas odio",
//     body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",
//   },
//   {
//     id: 6,
//     title: "dolorem eum magni eos aperiam quia",
//     body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
//   },
//   {
//     id: 7,
//     title: "magnam facilis autem",
//     body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas",
//   },
//   {
//     id: 8,
//     title: "dolorem dolore est ipsam",
//     body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae",
//   },
//   {
//     id: 9,
//     title: "nesciunt iure omnis dolorem tempora et accusantium",
//     body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas",
//   },
//   {
//     id: 10,
//     title: "optio molestias id quia eum",
//     body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error",
//   },
// ];

const PostList = () => {
  const [posts, setPosts] = useState([]); //2초 기다리고 나서 보이게 만들고 싶으니까 빈배열을 첨에 보여줘야한다.

  // 10개의 post 정보를 갖도록 posts state 설정
  const getPosts = async () => {
  // const getPosts = () => {
    // setPosts(fakePosts);
    //setPosts(fakePosts)를 날리고 axios로 가짜 api받아보기

    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(res.data);

    setPosts(res.data.slice(0, 20)) //100개의 정보를 갖는 (slice로 자름 너무많아서100개는) 상태로 바뀜 -> 실제로 통신을 해서 받아온 결과를 넣어준다.

    //위에랑 같은 코드
    // axios
    // .get("https://jsonplaceholder.typicode.com/posts")
    // .then((res) => console.log(res.data));
  };
  //useEffect는 어떤 상태가 바뀌었을 때 update된 상황에서 많이 쓰인다 (?)
  //컴포넌트가 mount된 시점에 2초 기다렸다가 getposts 함수 실행
  useEffect(() => {
    //2초 기다렸다가 getPosts 함수 실행
    // setTimeout(() => {
      //getPosts 함수 실행
      getPosts();
    // }, 2000); 지우는 이유는 이제 위에 await를 사용해서 이미 거기부터도 시간이 걸리는 작업이기 때문에 loading이 나올수 있어서 추가적으로 setTime할 필요가 없
  }, []); //마운팅 될 시점에만 보여줘야 하기 때문에 () => {} 뒤에 추가적으로 빈배열이 필요함

  const dataLoaded = posts.map((post) => {
    return <PostItem key={post.id} post={post} />;
  });
  //앞에 post는 이름이고 뒤는 props이다 자식 컴포넌트한테 지금 반복되고 있는게 무엇인지 알려주는 것

  return (
    <div className="PostList">
      <header>🎁 Post List</header>
      {posts.length > 0 ? dataLoaded : <h2>Loading...</h2>}
    </div>
  );
};

export default PostList;
