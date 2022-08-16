import { Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cn from "classnames";
import { tagColors, tagList } from "../../constants";
import { sideMenuList } from "../../mock/guideList";

export interface AsideProps {}

const Aside: React.FC<AsideProps> = () => {
  const [currentMenuId, setCurrentMenuId] = useState<string>("");

  const navigate = useNavigate();
  const { id } = useParams();
  const handleMenu = (item: { id: string; title: string }) => {
    setCurrentMenuId(item.id);
    navigate(`/nav/code/${item.id}`);
  };

  useEffect(() => {
    if (!currentMenuId && id) {
      setCurrentMenuId(id);
    }
  }, [currentMenuId, id]);

  return (
    <aside className="aside">
      <header className="margin-top padding-left aside-header">
        {tagList.map((tag, index) => (
          <span key={`TAG_NAV${index}`} className="header-tag">
            <Tag color={tagColors[index]}>{tag}</Tag>
          </span>
        ))}
      </header>
      <div className="side-menu margin-top">
        <ul>
          {sideMenuList.map(item => {
            return (
              <li
                className={cn("side-menu-item padding-left", { "active-menu": item.id === currentMenuId })}
                key={item.id}
                onClick={() => handleMenu(item)}
              >
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

Aside.displayName = "Aside";

export default Aside;
