import { useReducer } from "react";

const ACTIONS = {
  showStream: "show_stream",
  showSendStream: "show_send_stream",
  showXStream: "show_x_stream",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.showStream: {
      return { ...state, showStream: action.payload };
    }
    case ACTIONS.showXStream: {
      return { ...state, SendXStream: action.payload };
    }
    case ACTIONS.showSendStream: {
      return { ...state, showSendStream: action.payload };
    }
  }
  throw Error("Unknown action: " + action.type);
}
export const useStreams = () => {
  const { state, dispatch } = useReducer(reducer, {
    showXStream: false,
    showStream: false,
    showSendStream: false,
  });

  return {
    ...state,
    setShowStream: (v) => dispatch({ type: ACTIONS.showStream, payload: v }),
    setShowXStream: (v) => dispatch({ type: ACTIONS.showXStream, payload: v }),
    setSendStream: (v) =>
      dispatch({ type: ACTIONS.showSendStream, payload: v }),
  };
};
