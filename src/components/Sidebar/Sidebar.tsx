import styles from './Sidebar.module.css'

import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/gabivechiatto.png"/>
        <strong>Gabriela Vechiatto</strong>
        <span>Front-End Developer</span>
      </div>

      <footer>       
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>    
    </aside>
  )
}