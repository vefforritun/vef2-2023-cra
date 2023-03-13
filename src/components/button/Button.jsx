import './Button.css';

export function Button({ children, href }) {
  return (
    <a className="button" href={href}>{children}</a>
  )
}