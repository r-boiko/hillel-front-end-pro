import './styles.css';

const Post = ({ title, body }) => (
  <li className="item">
    <div className="title">{title}</div>
    <div className="body">{body}</div>
  </li>
)

export default Post;
