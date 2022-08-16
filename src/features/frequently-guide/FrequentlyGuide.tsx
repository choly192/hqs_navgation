import React from "react";
import { Col, Divider, Row } from "antd";
import ProductCard from "../../components/product-card/ProductCard";
import { guideList } from "../../mock/guideList";

export interface FrequentlyGuideProps {}

const FrequentlyGuide: React.FC<FrequentlyGuideProps> = () => {
  return (
    <section className="header-padding">
      <div className="">
        <Divider orientation="left">
          <span className="font-size-s">常用导航地址</span>
        </Divider>
        <Row justify="space-evenly">
          {guideList.map(item => (
            <Col lg={5} key={item.id}>
              <ProductCard cardInfo={item} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

FrequentlyGuide.displayName = "FrequentlyGuide";

export default FrequentlyGuide;
