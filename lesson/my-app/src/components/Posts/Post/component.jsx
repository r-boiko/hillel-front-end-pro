import {connect} from "react-redux";

import {removePost} from '../../../store/posts/actions'

import './styles.css';

const Post = ({ id, title, body, removePost }) => (
  <li className="item">
    <div className="title">{title}</div>
    <div className="body">{body}</div>
    <button onClick={() => removePost(id)}>Remove</button>
  </li>
)

const mapDispatchToProps = {
  removePost,
}

export default connect(null, mapDispatchToProps)(Post);
