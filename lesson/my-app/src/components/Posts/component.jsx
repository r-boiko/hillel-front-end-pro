import {useEffect} from "react";
import {connect} from "react-redux";
import { Skeleton, Row } from 'antd';

import {setPosts} from '../../store/posts/actions';
import {selectPosts, selectPostsLength} from '../../store/posts/selectors';

import Empty from '../../components/Empty';
import Post from './Post';

import './styles.css';

const Posts = ({posts, postsLength, setPosts}) => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
  }, []);

  return (
   <div>
     <h1>Posts count: {postsLength}</h1>
     <ul className="list">
       {posts.length === 0
         ? (
           <>
             <Skeleton active avatar/>
             <Skeleton active/>
             <Skeleton active/>
             <Skeleton active/>
             <Skeleton active/>
           </>
         )
         : (
           <Row gutter={16}>
             {posts.map(post => <Post key={post.id} {...post} />)}
           </Row>
         )
       }
     </ul>
   </div>
  )
}

const mapStateToProps = state => ({
  posts: selectPosts(state),
  postsLength: selectPostsLength(state),
})

const mapDispatchToProps = {
  setPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
