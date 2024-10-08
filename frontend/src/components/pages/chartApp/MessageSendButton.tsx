import React from 'react';
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
const MessageSendButton = ({
  message,
  sendChatMessage,
}: {
  message: string;
  sendChatMessage: () => void;
}) => {
  return (
    <React.Fragment>
      {message?.length > 0 && (
        <Button
          onClick={sendChatMessage}
          type="primary"
          shape="circle"
          icon={<SendOutlined />}
        />
      )}
    </React.Fragment>
  );
};

export default MessageSendButton;
