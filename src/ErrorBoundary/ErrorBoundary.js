import React from "react";
import NeedVPN from "./NeedVPN/NeedVPN";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    // console.log(error.message);
    return { error: error.message };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    switch (this.state.error) {
      case "Failed to fetch":
        return <NeedVPN />;

      default:
        return this.props.children;
    }
  }
}
export default ErrorBoundary;
