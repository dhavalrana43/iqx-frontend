"use client";

import React, { Component, ErrorInfo } from "react";

import ErrorPage from "./error";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    throw new Error(`Error caught by boundary: ${error.message} ${errorInfo}`);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage error={this.state.error!} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
