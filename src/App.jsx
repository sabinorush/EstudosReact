import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css'


export function App() {

  return (

    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gustavo Sabino"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum earum facilis adipisci perspiciatis voluptatem eligendi labore, sint maxime animi veritatis atque a consectetur cumque? Nihil quasi ipsam tenetur eaque praesentium."
          />
          <Post
            author="Camylla Tavares"
            content="Uma namorada muito linda"
          />
        </main>
      </div>
    </div>
  )
}
