import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/evertonlsds.png",
      name: "Everton Santos",
      role: "Full Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera!" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare",
      },
      { type: "link", content: "jane.design/doctocare" },
    ],
    publisheAt: new Date("2023-03-21 17:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/carlosweb.png",
      name: "Carlos Eduardo",
      role: "Full Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera!" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare",
      },
      { type: "link", content: "jane.design/doctocare" },
    ],
    publisheAt: new Date("2023-03-22 17:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
export default App;
