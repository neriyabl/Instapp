import React, { Component } from "react";
import "./MainPage.css";

export default class MainPage extends Component {
  render() {
    const { name, isMute, id } = this.props.contact || {};
    return (
      <div className="main-page">
        <div className="header">
          {name && (
            <>
              <div className="bold">{name}</div>
              <div
                onClick={() => this.props.onMute(id)}
                className="icon-button"
              >
                "font here"
              </div>
            </>
          )}
        </div>
        <div className="conversation-page"></div>
      </div>
    );
  }
}
