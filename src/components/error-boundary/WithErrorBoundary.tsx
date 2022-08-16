import React from "react";

import ErrorBoundary from "./ErrorBoundary";

const WithErrorBoundary =
  (WrapComponent = ErrorBoundary) =>
  (InnerComponent: any) => {
    const WrapErrorBoundary = (props: any) => (
      <WrapComponent {...props}>
        <InnerComponent {...props} />
      </WrapComponent>
    );
    WrapErrorBoundary.displayName = `WithErrorBoundary_${WrapComponent.name}`;
  };

WithErrorBoundary.displayName = "WithErrorBoundary";

export default WithErrorBoundary;
