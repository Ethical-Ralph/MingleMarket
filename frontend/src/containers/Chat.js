import React, { Component } from "react";
import Sidepanel from "./Sidepanel/Sidepanel";
import WebSocketInstance from "../websocket";

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.waitForSocketConnection(() => {
      WebSocketInstance.addCallbacks(
        this.setMessages.bind(this),
        this.addMesage.bind(this)
      );
      WebSocketInstance.fetchMessages(this.props.currentUser);
    });
  }

  waitForSocketConnection(callback) {
    const component = this;
    setTimeout(function () {
      if (WebSocketInstance.state() === 1) {
        console.log("Connection is secure");
        if (callback != null) {
          callback();
        }
        return;
      } else {
        console.log("Waiting for connection....");
        component.waitForSocketConnection(callback);
      }
    }, 100);
  }

  setMessages(messages) {
    this.setState({ messages: messages });
  }
  addMesage(message) {
    this.setState({ messages: [...this.state.messages, message] });
  }

  renderMessages = (messages) => {
    const currentUser = "admin";
    return messages.map((message) => (
      <li
        key={message.id}
        className={message.author === currentUser ? "sent" : "replies"}
      >
        <img src="http://emilcarlsson.se/assets/mikeross.png" />
        <p>
          <small>
            {Math.round(
              (new Date().getTime() - new Date(message.timestamp).getTime()) /
                60000
            )}{" "}
            minutes ago
          </small>
          <br />
          {message.content}
        </p>
      </li>
    ));
  };

  sendMessageHandler = (e) => {
    e.preventDefault();
    const messageObject = {
      from: "admin",
      content: this.state.message,
    };
    WebSocketInstance.newChatMessage(messageObject);
    this.setState({ message: "" });
  };

  messageChangeHandler = (event) => {
    this.setState({ message: event.target.value });
  };

  render() {
    const messages = this.state.messages;
    return (
      <div id="frame">
        <Sidepanel />
        <div className="content">
          <div className="contact-profile">
            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
            <p>username</p>
            <div className="social-media">
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
          </div>
          <div className="messages">
            <ul id="chat-log">{messages && this.renderMessages(messages)}</ul>
          </div>
          <div className="message-input">
            <form onSubmit={this.sendMessageHandler}>
              <div className="wrap">
                <input
                  onChange={this.messageChangeHandler}
                  value={this.state.message}
                  id="chat-message-input"
                  type="text"
                  placeholder="Write your message..."
                />
                <i
                  className="fa fa-paperclip attachment"
                  aria-hidden="true"
                ></i>
                <button id="chat-message-submit" className="submit">
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;