import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/GabrielTrojack.png" />
          <div className={styles.authorInfo}>
            <strong>Gabriel Trojack</strong>
            <span>O monocromike</span>
          </div>
        </div>

        <time title="28 de fevereiro às 20:37" dateTime="2023-02-13 20:36:00">publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="">jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentario"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.cometList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}