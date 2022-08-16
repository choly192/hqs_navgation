import React from "react";

export interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = props => {
  return (
    <p className="text-description" title={props.description}>
      {props.description}
    </p>
  );
};

Description.displayName = "Description";

export default Description;
