import styles from "./Post.module.css";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/sabinorush.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Gustavo Sabino</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="20 de outubro às 21h21" dateTime="2022-10-22 21:21:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="#">Jane.design/doctorcare</a></p>
                <p>
                    <a href="#"></a>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                </p>

            </div>
        </article>
    )
}