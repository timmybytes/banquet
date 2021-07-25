import styles from './Header.module.scss';

type HeaderProps = {
  children: React.ReactNode;
}

export const Header = ({children}: HeaderProps) => {
  return (
    <div className={styles.Header }>
      {children}
    </div>
  );
};
