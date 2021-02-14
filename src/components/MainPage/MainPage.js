import React, { Component } from "react";
import "./MainPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";

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
                <FontAwesomeIcon
                  icon={isMute ? faMicrophoneSlash : faMicrophone}
                />
              </div>
            </>
          )}
        </div>
        <div className="conversation-page"></div>
      </div>
    );
  }
}
