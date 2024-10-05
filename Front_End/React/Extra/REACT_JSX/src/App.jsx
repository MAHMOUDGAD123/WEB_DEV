import Counter from "./components/Counter";
import Header from "./components/Header";
import MyInfo from "./components/MyInfo";

export default function App() {
  return (
    <>
      <Header />

      <MyInfo
        name={{ f_name: "Mahmoud", l_name: "Gad" }}
        gig="Front-End Developer"
        skills={[
          "HTML",
          "CSS",
          "JS",
          "TS",
          "React.JS",
          "Remix.JS",
          "Express.JS",
        ]}
      />

      <Counter />
    </>
  );
}
