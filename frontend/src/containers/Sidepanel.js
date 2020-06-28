import React from "react";
import { connect } from "react-redux";
import * as authActions from "../store/actions/auth";
import * as navActions from "../store/actions/nav";
import * as msgActions from "../store/actions/message";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Contact from "../components/Contact";
import axios from "axios";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class Sidepanel extends React.Component {
  state = {
    loginForm: true,
  };
  waitForAuthDetails() {
    const component = this;
    setTimeout(() => {
      if (
        component.props.token !== null &&
        component.props.token !== undefined
      ) {
        component.props.getUserChats(
          component.props.username,
          component.props.token
        );
        return;
      } else {
        console.log("waiting for auth details");
        component.waitForAuthDetails();
      }
    }, 100);
  }

  componentDidMount() {
    this.waitForAuthDetails();
  }

  changeForm = () => {
    this.setState({ loginForm: !this.state.loginForm });
  };

  authenticate = (e) => {
    e.preventDefault();
    if (this.state.loginForm) {
      this.props.login(e.target.username.value, e.target.password.value);
    } else {
      this.props.signup(
        e.target.username.value,
        e.target.email.value,
        e.target.password.value,
        e.target.password2.value
      );
    }
  };
  openAddChatPopup() {
    this.props.addChat();
  }
  render() {
    const activeChats = this.props.chats.map((c) => {
      return (
        <Contact
          key={c.id}
          name="Louis Litt"
          status="online"
          picURL="http://emilcarlsson.se/assets/louislitt.png"
          chatURL={`/${c.id}`}
        />
      );
    });
    return (
      <div id="sidepanel">
        <div id="profile">
          <div className="wrap">
            <img
              id="profile-img"
              src="http://emilcarlsson.se/assets/mikeross.png"
              className="online"
              alt=""
            />
            <p>Mike Ross</p>
            <i
              className="fa fa-chevron-down expand-button"
              aria-hidden="true"
            ></i>
            <div id="status-options">
              <ul>
                <li id="status-online" className="active">
                  <span className="status-circle"></span> <p>Online</p>
                </li>
                <li id="status-away">
                  <span className="status-circle"></span> <p>Away</p>
                </li>
                <li id="status-busy">
                  <span className="status-circle"></span> <p>Busy</p>
                </li>
                <li id="status-offline">
                  <span className="status-circle"></span> <p>Offline</p>
                </li>
              </ul>
            </div>
            <div id="expanded">
              {this.props.loading ? (
                <Spin indicator={antIcon} />
              ) : this.props.isAuthenticated ? (
                <button onClick={() => this.props.logout()} className="authBtn">
                  <span>Logout</span>
                </button>
              ) : (
                <div>
                  <form method="POST" onSubmit={this.authenticate}>
                    {this.state.loginForm ? (
                      <div>
                        <input
                          name="username"
                          type="text"
                          placeholder="username"
                        />
                        <input
                          name="password"
                          type="password"
                          placeholder="password"
                        />
                      </div>
                    ) : (
                      <div>
                        <input
                          name="username"
                          type="text"
                          placeholder="username"
                        />
                        <input name="email" type="email" placeholder="email" />
                        <input
                          name="password"
                          type="password"
                          placeholder="password"
                        />
                        <input
                          name="password2"
                          type="password"
                          placeholder="password confirm"
                        />
                      </div>
                    )}

                    <button type="submit">Authenticate</button>
                  </form>

                  <button onClick={this.changeForm}>Switch</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div id="search">
          <label htmlFor="">
            <i className="fa fa-search" aria-hidden="true"></i>
          </label>
          <input type="text" placeholder="Search contacts..." />
        </div>
        <div id="contacts">
          <ul>
            {activeChats}
            {/* <Contact
              name="Louis Litt"
              status="online"
              picURL="http://emilcarlsson.se/assets/louislitt.png"
              chatURL="/louis"
            />

            <Contact
              name="Harvey Specter"
              status="online"
              picURL="http://emilcarlsson.se/assets/harveyspecter.png"
              chatURL="/harvey"
            /> */}
          </ul>
        </div>
        <div id="bottom-bar">
          <button id="addcontact" onClick={() => this.openAddChatPopup()}>
            <i className="fa fa-user-plus fa-fw" aria-hidden="true"></i>{" "}
            <span>Add Chat</span>
          </button>
          <button id="settings">
            <i className="fa fa-cog fa-fw" aria-hidden="true"></i>{" "}
            <span>Settings</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    loading: state.auth.loading,
    token: state.auth.token,
    username: state.auth.username,
    chats: state.message.chats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userName, password) =>
      dispatch(authActions.authLogin(userName, password)),
    logout: () => dispatch(authActions.logout()),
    signup: (username, email, password1, password2) =>
      dispatch(authActions.authSignup(username, email, password1, password2)),
    addChat: () => dispatch(navActions.openAddChatPopup()),
    getUserChats: (username, token) =>
      dispatch(msgActions.getUserChats(username, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidepanel);
