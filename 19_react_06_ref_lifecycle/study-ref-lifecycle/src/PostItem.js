const PostItem = (props) => {
  //구조 분해 할당을 통해서 저장하고 꺼내온다
  //props에는 {id:x, title:xxx, body:xxx} 가 찍힐 것이다.
  const { post } = props;
  // post => {id:x, title:xxx, body:xxx}
  //   console.log(post)
  return (
    <div className="PostItem">
      {/*위에 PostItem에선 key설정해주면 안됨 부모 컴퍼넌트가서 mpa이 돌아가는 곳에다 key를 넣어줘야한다 */}
      <div>
        <span className="id">No. {post.id}</span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body}</p>
    </div>
  );
};

export default PostItem;
