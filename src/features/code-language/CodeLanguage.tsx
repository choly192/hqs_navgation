import React from "react";
import { useParams } from "react-router-dom";
import { Badge, Col, Row } from "antd";
import { TagOutlined } from "@ant-design/icons";
import { frontedCodeSiteList } from "../../mock/guideList";
import ProductCard from "@/components/product-card/ProductCard";

export interface CodeLanguageProps {}

const CodeLanguage: React.FC<CodeLanguageProps> = () => {
  const params = useParams();
  if (params.id !== "fronted") {
    return (
      <section className="header-padding side-content">
        <h1 className="margin-top">功能尚未完善！</h1>
      </section>
    );
  }

  return (
    <section className="header-padding side-content">
      {frontedCodeSiteList.map(item => {
        return (
          <div className="side-section margin-top" key={item.subId}>
            <Badge.Ribbon text="Hot" color="red">
              <div className="section-title padding">
                <TagOutlined />
                <span className="margin-left-s">{item.subTitle}</span>
              </div>
            </Badge.Ribbon>
            <div className="section-container">
              <Row justify="space-evenly">
                {item.siteList.map(cItem => (
                  <Col lg={7} key={cItem.id}>
                    <ProductCard cardInfo={cItem} />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        );
      })}
    </section>
  );
};

CodeLanguage.displayName = "CodeLanguage";

export default CodeLanguage;
