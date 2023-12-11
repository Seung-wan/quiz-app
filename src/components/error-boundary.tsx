import { Component } from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  rejectedFallback: ReactNode;
  reset?: () => void;
}

interface State {
  hasError: boolean;
}
const initialState: State = {
  hasError: false,
};

class ErrorBoundary extends Component<Props, State> {
  state: State = initialState;

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  resetBoundary = () => {
    this.props.reset?.();
    this.setState(initialState);
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-0.5">
            <div>{this.props.rejectedFallback}</div>
            <div>저희 팀은 빠르게 문제를 해결하고 있어요.</div>
          </div>
          <button
            className="w-32 p-2 underline"
            type="button"
            onClick={this.resetBoundary}
          >
            다시 시도하기
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
