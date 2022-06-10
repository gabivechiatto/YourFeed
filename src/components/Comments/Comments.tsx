import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comments.module.css";
import { Avatar } from '../Avatar/Avatar'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comments({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/gabivechiatto.png" hasBorder={false}/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriela Vechiatto</strong>
              <time
                className={styles.date}
                title="04 de Junho às 20:43"
                dateTime="2022-06-04 20:40:12"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>

      </div>
    </div>
  );
}
