import React, { ReactElement } from "react";

interface ErrorBoundaryState {
  error?: any;
  errorInfo?: any;
}

interface ErrorBoundaryProps {
  fallback?: ReactElement;
  FallBackComponent?: typeof React.Component | React.FC;
  children?: ReactElement;
  fallbackRender?: (fallbackProps: { error: true; resetErrorBoundary: () => void }) => ReactElement;

  onError?: (error: any, componentStack: any) => void;
  onReset?: () => void;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = {
    error: false,
  };

  static getDerivedStateFromError(error: any) {
    return { error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // 错误上报
    this.props.onError && this.props.onError(error, errorInfo.componentStack);
  }

  resetErrorBoundary = () => {
    this.props.onReset && this.props.onReset();
    this.setState({ error: false });
  };

  render(): React.ReactNode {
    const { fallback, FallBackComponent, fallbackRender } = this.props;
    const { error } = this.state;
    if (error) {
      const fallbackProps = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      };
      // 判断是否是 React Element
      if (React.isValidElement(fallback)) {
        return fallback;
      }
      // 组件形式传入
      if (FallBackComponent) {
        return <FallBackComponent {...fallbackProps} />;
      }

      if (typeof fallbackRender === "function") {
        return fallbackRender(fallbackProps);
      }

      throw new Error("You must provide a Error template to showing");
    }
    return this.props?.children;
  }
}

export default ErrorBoundary;
