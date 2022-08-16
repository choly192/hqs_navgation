import React, { MouseEvent } from "react";
import { message, Tooltip } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

export interface ShareProps {}

const Share: React.FC<ShareProps> = () => {
  const handleShare = (e: MouseEvent) => {
    e.stopPropagation();
    message.info("功能尚未完善！");
  };
  return (
    <Tooltip title="分享">
      <div onClick={handleShare}>
        <ShareAltOutlined />
      </div>
    </Tooltip>
  );
};

Share.displayName = "Share";

export default Share;
