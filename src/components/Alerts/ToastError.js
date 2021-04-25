import React from "react";
import "semantic-ui-css/semantic.min.css";
import { SemanticToastContainer, toast } from "react-semantic-toasts";
import "./Toast.css";

class ToastError extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      toast({
        type: "error",
        icon: "eye",
        title: "Error Toast",
        size: "small",
        color: "red",
        description: "Changes successfully saved",
        animation: "drop",
        time: 5000,
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <SemanticToastContainer
          className="toastContainer"
          position="bottom-center"
        />
      </div>
    );
  }
}

export default ToastError;
