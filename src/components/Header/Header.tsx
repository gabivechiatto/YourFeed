import Logo from '../../assets/logo.svg';

import styles from './Header.module.css'

export function Header(){
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo-YourFeed"/>
      <h1>YourFeed</h1>         
    </header>
  )
}