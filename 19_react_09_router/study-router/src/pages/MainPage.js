import { useSearchParams } from "react-router-dom";

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("mode")); //dark or null 찍힘
  return (
    <main className={['MainPage',searchParams.get('mode')].join(' ')}>
      <div>여기는 홈!</div>
      <button
        onClick={() => {
          setSearchParams({ mode: "Dark" });
        }}
      >
        Dark Mode
      </button>
    </main>
  );
};

export default MainPage;
