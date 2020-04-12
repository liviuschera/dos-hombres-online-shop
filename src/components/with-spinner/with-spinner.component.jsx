import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

// HoC that will show a spinning wheel if isLoading prop is passed or the component that is passed as argument(WrappedComponent)
export default function WithSpinner(WrappedComponent) {
  return function ({ isLoading, ...otherProps }) {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
}
