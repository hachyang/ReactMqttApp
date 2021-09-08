import React, { useEffect, useState } from 'react';
import { Card, List } from 'antd';

const Receiver = ({ deviceIP,payload }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (payload.topic) {
      setMessages(messages => [...messages, payload])
    }
  }, [payload])

  const renderListItem = (item) => (
    <List.Item>
      <List.Item.Meta
        title={item.topic}
        description={item.message}
      />
    </List.Item>
  )

  return (
    <Card
      title="Receiver"
    >
      <p>Device IP: {deviceIP} </p>
      <button onClick= {() => setMessages([])}> Clear </button>

      <List
        size="small"
        bordered
        dataSource={messages}
        renderItem={renderListItem}
      />

    </Card>
  );
}

export default Receiver;
