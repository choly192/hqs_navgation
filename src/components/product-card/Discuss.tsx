import React, { MouseEvent } from "react";
import { Tooltip, message } from "antd";
import { FormOutlined } from "@ant-design/icons";

export interface DiscussProps {}

const Discuss: React.FC<DiscussProps> = () => {
  const handleDiscuss = (e: MouseEvent) => {
    e.stopPropagation();
    message.info("功能尚未完善！");
  };
  return (
    <Tooltip title="评论">
      <div onClick={handleDiscuss}>
        <FormOutlined />
      </div>
    </Tooltip>
  );
};

Discuss.displayName = "Discuss";

export default Discuss;
