type FooterProps = { children?: React.ReactNode }

export const Footer = ({ children }: FooterProps): React.ReactElement => {
  return <div className='{styles.root}'>{children}</div>
}
