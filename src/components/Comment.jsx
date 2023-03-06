import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/GabrielTrojack.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Trojack</strong>
              <time title="28 de fevereiro às 20:37" dateTime="2023-02-13 20:36:00">cerca de 1h atrás</time>
            </div>

            <button title="deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Curtir <span>20 </span>
          </button>
        </footer>
      </div>
    </div>
  )
}