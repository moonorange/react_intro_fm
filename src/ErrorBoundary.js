import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

// Error Boundary can be used only for class component
class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    // getDerivedStateFromProps is invoked right before calling the render method. It should return an object to update the state, or null to update nothing.
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 3000);
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait three seconds.
        </h2>
      );
    }

    return this.props.children; // show whatever children does, in this case nothing
  }
}

export default ErrorBoundary;
