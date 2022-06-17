import React, {useState} from 'react';
import {connect} from "react-redux";
import { Card, Button, Modal, Col } from 'antd';

import {removePost} from '../../../store/posts/actions'

import './styles.css';

const Post = ({ id, title, body, removePost }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
    removePost(id);
  };

  return (
      <Col className="gutter-row" span={6}>
        <Card title={title} style={{ width: 300 }}>
          <p>{body}</p>
          <p>
            <Button type="primary" danger onClick={showModal}>
              Remove
            </Button>
          </p>
        </Card>
        <Modal
          title="Modal"
          visible={visible}
          onOk={hideModal}
          onCancel={hideModal}
          okText="Remove"
          cancelText="Abort"
        >
          <p>Are you sure?</p>
        </Modal>
      </Col>
  )
}


const mapDispatchToProps = {
  removePost,
}

export default connect(null, mapDispatchToProps)(Post);
