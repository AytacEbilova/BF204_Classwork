import React, { useEffect, useState } from 'react';
import { Button, Space, Table } from 'antd';
import { getAll, patchOne } from '../../../services/request';
import styles from './message.module.css'
const Message = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getAll('/messages').then((response) => {
      setMessages(response.data);
    });
  }, []);

  const handleMarkAsRead = async (id) => {
    try {
      await patchOne('/messages', id, { isRead: true });
      const updatedMessages = messages.map(msg =>
        msg.id === id ? { ...msg, isRead: true } : msg
      );
      setMessages(updatedMessages);
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    { title: 'Full Name', dataIndex: 'fullname' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Title', dataIndex: 'title' },
    { title: 'Message', dataIndex: 'message' },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => handleMarkAsRead(record.id)} disabled={record.isRead}>
            Read
          </Button>
        </Space>
      ),
    }
  ];

  const rowClassName = (record) => {
    return record.isRead ? styles.readRow : '';
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={messages}
        rowClassName={rowClassName}
        rowKey="id"
      />
    </div>
  );
};

export default Message;



