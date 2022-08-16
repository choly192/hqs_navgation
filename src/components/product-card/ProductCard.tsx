import React, { MouseEvent } from "react";
import { Avatar, Card, Tag } from "antd";
import Collection from "./Collection";
import Share from "./Share";
import Discuss from "./Discuss";
import { GuideItemInfo } from "../../features/frequently-guide/guide.type";
import Description from "./Description";
const { Meta } = Card;

export interface ProductCardProps {
  cardInfo: GuideItemInfo;
}

const ProductCard: React.FC<ProductCardProps> = props => {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    window.open(props.cardInfo.url, "_blank");
  };
  return (
    <div className="margin-bottom" onClick={handleClick}>
      <Card
        hoverable
        // style={{ width: 300 }}
        // cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<Collection count={props.cardInfo.count} />, <Share />, <Discuss />]}
      >
        <Meta
          avatar={<Avatar src={props.cardInfo.imgUrl} size={80} shape="square" />}
          title={props.cardInfo.title}
          description={<Description description={props.cardInfo.description} />}
        />
        <div className="margin-top">
          {props.cardInfo.tags.map((tag, index) => (
            <Tag key={`TAG_${index}`} color={colors[index]}>
              {tag}
            </Tag>
          ))}
        </div>
      </Card>
    </div>
  );
};

ProductCard.displayName = "ProductCard";

const colors = ["blue", "geekblue", "purple"];

export default ProductCard;
