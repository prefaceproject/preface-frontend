import React from "react";
import "semantic-ui-css/semantic.min.css";
import { SemanticToastContainer, toast } from "react-semantic-toasts";
import "./Toast.css";

class ToastSuccess extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      toast({
        type: "success",
        icon: "check",
        title: "Success Toast",
        size: "small",
        color: "blue",
        description: "There was an error, please try again!",
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

export default ToastSuccess;
