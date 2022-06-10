import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'
import { Comments } from '../Comments/Comments'
import styles from './PostList.module.css'
import { Avatar } from '../Avatar/Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface Author {
  name: string;
  role: string;
  avatarURL: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function PostList({author, publishedAt, content}: PostProps){
  const firstComment = 'Muito bacana! Parabéns 🎉'
  const [comments, setComments] = useState([firstComment])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()   
    setComments([...comments, newCommentText]) 
    setNewCommentText('')
  }

  function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteComment(commentToDelete: string){
    const commentWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentWithoutDeletedOne)
  }

  const isNewCommentInputEmpty = newCommentText.length === 0

  return (    
    <article className={styles.post}>
      
      <header className={styles.headerPost}>
        <div className={styles.author}>
          <Avatar src={author.avatarURL} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time 
          className={styles.date}
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>  

      <div className={styles.content}>        
        {content.map(line => {
          if(line.type === 'paragraph'){
            return(
              <p key={line.content}>{line.content}</p>
            )
          } else if (line.type === 'link'){
            return(
              <p key={line.content}><a href="#">{line.content}</a></p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe um comentário" 
          value={newCommentText} 
          onChange={handleNewComment}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentInputEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return(
            <Comments 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
   
  )
}