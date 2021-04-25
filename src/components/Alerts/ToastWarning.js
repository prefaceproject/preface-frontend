import React from "react";
import "semantic-ui-css/semantic.min.css";
import { SemanticToastContainer, toast } from "react-semantic-toasts";
import "./Toast.css";

class ToastWarning extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      toast(
        {
          title: "Info Toast",
          icon: "warning sign",
          size: "small",
          color: "orange",
          description: "Please save unsaved changes",
          animation: "drop",
        },
        () => console.log("toast closed")
      );
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

export default ToastWarning;
