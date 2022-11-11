const tbody = document.querySelector("tbody");
const buttonGroup = document.querySelector("#button-group");

// 폼 [등록] 버튼 클릭시
// - 테이블에 데이터 추가
function createVisitor() {
  console.log("click 등록 버튼");

  // 폼 선택
  const form = document.forms["visitor-form"];
  console.dir(form);
  console.log(form.name.value); // name input 값의 value
  console.log(form.comment.value); // comment input 값의 value

  // if(!form.name.value.length) { //이건 부정 연산자 방식
  //  !0  -> flase -> true
  //   alert('이름기입!!');
  //   clearInput();
  //   return;
  // }

  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름 또는 방명록 기입!");
    clearInput();
    return;
    //여기서 더 쪼개서 이름일땐 이름 방명록일 땐 방명록 기입해라고 친절하게 나눠서 설명해주는 것이 좋다
  }

  if (form.name.value.length > 10) {
    alert("이름은 10글자 미만!!");
    clearInput(); //10글자 이상의 값이 들어왔을 때 input 창을 clear한다는 함수
    return; //함수 반환한다는 것은 그냥 함수를 종료한다는 뜻 결국 10글자 이상되면 자동으로 함수가 종료되어 더이상 밑으로 식이 이동하지 않게된다
  }
  axios({
    method: "POST",
    url: "/visitor/write",
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  })
    .then((res) => {
      console.log(res);
      console.log(res.data);
      return res.data;
    })
    .then((data) => {
      console.log(data); // {id: 8, name: 'ㅁㅁ', comment: 'ㅁㅁ'}

      const html = `
      <tr id="tr_${data.id}">
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.comment}</td>
        <td><button type="button" onclick="editDo('${data.id}');">수정</button></td>
        <td><button type="button" onclick="deleteVisitor(this, '${data.id}');">삭제</button></td>
      </tr>`;

      // 테이블에 추가된 정보를 "바로" 보여주기
      // data 객체에 담긴 값을 이용해서 tbody 태그의 자식으로 tr 한줄이 추가되는 코드
      // js: insertAdjacentHTML() -> 특정 요소에 html 코드 추가 가능
      // vs. innerHTML(): 기존 html 코드 지우고 덮어씌움
      // jquery: append()
      tbody.insertAdjacentHTML("beforeend", html); // ver.js
      // $('tbody').append(html); // ver. jquery
      clearInput();
    });
}

// 테이블 내 [수정] 버튼 클릭시
// - (1) form input에 각각 이름과 방명록 값을 넣기
// - (2) [변경], [취소] 버튼 대체
async function editVisitor(id) {
  console.log("edit visitor!!!");
  console.log(id); // 현재 행에 대한 id(pk)

  // (1) form input에 각각 이름과 방명록 값을 넣기
  // axios 응답 결과를 result 변수에 담고자 함 (-> 동기 처리)
  // (result 변수에 한 명에 대한 정보를 담아야 하니까)
  // -> axios 처리를 기다렸다가 result라는 변수에 담아야 함 (동기처리)
  // -> async/await
  // await를 만나 프로미스가 처리될 때까지 기다려줌
  let result = await axios({
    method: "GET",
    url: `/visitor/get?id=${id}`,
  }).then((res) => {
    console.log("1: ", res.data);
    return res.data;
  });
  console.log("2 방문자 하나 조회 결과: ", result);
  // result: {id: 19, name: '123', comment: '123'}

  // 폼의 input에 "방문자 하나 조회 결과" 값을 각각 대입
  const form = document.forms["visitor-form"];
  form.name.value = result.name;
  form.comment.value = result.comment;

  // (2) [변경], [취소] 버튼 "대체" -> innerHTML
  const html = `
    <button type="button" onclick="editDo('${id}');">변경</button>
    <button type="button" onclick="editCancel();">취소</button>
  `;
  buttonGroup.innerHTML = html;
}

// [변경] 버튼 클릭
// - 데이터 변경
function editDo(id) {
  const form = document.forms["visitor-form"];

  axios({
    method: "PATCH",
    url: "/visitor/edit",
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    },
  })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .then((data) => {
      alert(data); // 수정 성공

      const children = document.querySelector(`#tr_${id}`).children; // 배열 크기 5 (tr 5개)
      console.log(children);
      // in js
      // children[1].textContent = form.name.value;
      // children[2].textContent = form.comment.value;

      // in jquery
      $(`#tr_${id}`).children("td:eq(1)").text(form.name.value);
      $(`#tr_${id}`).children("td:eq(2)").text(form.comment.value);
    });
}

// [취소] 버튼 클릭시
// - input 초기화
// - [등록] 버튼 보이기
function editCancel() {
  console.log("edit cancel");
  // (1) input 초기화
  clearInput();

  // (2) 등록 버튼 보이기 (대체)
  const html = `<button type="button" onclick="createVisitor();">등록</button>`;
  buttonGroup.innerHTML = html;
}

// [삭제] 버튼 클릭시
// - 테이블에서 해당 행 삭제
function deleteVisitor(obj, id) {
  console.log("click 삭제 버튼");
  console.log(obj);
  console.log(id);

  if (!confirm("정말 삭제하시겠습니까?")) {
    // !false -> true
    return;
  }

  axios({
    method: "DELETE",
    url: "/visitor/delete",
    data: {
      id: id,
    },
  })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .then((data) => {
      alert(data); // alert('삭제 성공!!')

      // obj: 삭제버튼 자기자신
      // obj.parentElement.parentElement.remove();
      // closest() 메서드
      obj.closest(`#tr_${id}`).remove(); // 더 간편 ver
    });
}

// input 초기화
function clearInput() {
  const form = document.forms["visitor-form"];
  form.name.value = "";
  form.comment.value = "";
}