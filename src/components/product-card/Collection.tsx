import React, { MouseEvent, useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Statistic, Tooltip } from "antd";

export interface CollectionProps {
  count: number;
}

const Collection: React.FC<CollectionProps> = props => {
  const [value, setValue] = useState<number>(props.count);
  const [isCollected, setIsCollected] = useState<boolean>(false);
  const handleCollection = (e: MouseEvent) => {
    e.stopPropagation();
    !isCollected ? setValue(count => count + 1) : setValue(count => count - 1);
    setIsCollected(!isCollected);
  };
  return (
    <Tooltip title="收藏">
      <div onClick={handleCollection}>
        <Statistic
          value={value}
          valueStyle={{ fontSize: "16px" }}
          prefix={
            !isCollected ? (
              <HeartOutlined style={{ fontSize: "16px" }} />
            ) : (
              <HeartFilled style={{ color: "#2b82df", fontSize: "16px" }} />
            )
          }
        />
      </div>
    </Tooltip>
  );
};

Collection.displayName = "Collection";

export default Collection;
