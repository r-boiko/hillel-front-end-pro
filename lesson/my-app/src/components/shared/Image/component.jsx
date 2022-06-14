import './styles.css';

const Image = ({ className, src, alt }) => (
  <img
    className={className ? `App-logo ${className}` : 'App-logo'}
    src={src}
    alt={alt}
  />
)

export default Image;
