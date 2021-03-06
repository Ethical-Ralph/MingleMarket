import axios from "axios";
import * as actionTypes from "./actionTypes";
import { baseUrl } from "./auth";

export const addMessage = (message) => {
  return {
    type: actionTypes.ADD_MESSAGE,
    message: message,
  };
};

export const setMessages = (messages) => {
  return {
    type: actionTypes.SET_MESSAGES,
    messages: messages,
  };
};

const getUserChatsSuccess = (chats) => {
  return {
    type: actionTypes.GET_CHATS_SUCCESS,
    chats: chats,
  };
};

export const getUserChats = (username, token) => {
  return (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    axios
      .get(baseUrl + `api/chat/?username=${username}`, { headers: headers })
      .then((res) => dispatch(getUserChatsSuccess(res.data)));
  };
};
