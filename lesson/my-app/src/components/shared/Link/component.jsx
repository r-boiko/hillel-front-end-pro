import './styles.css';

const Link = ({ className, href, text }) => (
  <a
    className={className ? `App-link ${className}` : 'App-link'}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
)

export default Link;
