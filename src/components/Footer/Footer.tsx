import React from 'react'; import styles from './Footer.module.scss'; type
FooterProps = { children?: React.ReactNode; } export const
Footer
= ({children}:
FooterProps) => { return (
<div className="{styles.root}">
  {children}
</div>
); };