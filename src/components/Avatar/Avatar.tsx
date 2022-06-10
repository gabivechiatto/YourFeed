import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
  alt?: string;
}

export function Avatar({hasBorder = true, src, alt}: AvatarProps){ 
  return(
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src}
      alt={alt}
    />
  )
}