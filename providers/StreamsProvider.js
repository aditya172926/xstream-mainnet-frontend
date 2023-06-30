import { createContext, useReducer } from "react";

const intialState = {
  showXStream: false,
  showStream: false,
  showSendStream: false,
}

export const StreamsContext = createContext(intialState);

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
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export const StreamsProvider = ({ children }) => {
  const { state, dispatch } = useReducer(reducer, intialState);
  return (
    <StreamsContext.Provider
      value={{
        ...state,
        setShowStream: (v) => {
          dispatch({ type: ACTIONS.showStream, payload: v });
        },
        setShowXStream: (v) => {
          dispatch({ type: ACTIONS.showXStream, payload: v });
        },
        setSendStream: (v) => {
          dispatch({ type: ACTIONS.showSendStream, payload: v });
        },
      }}
    >
      {children}
    </StreamsContext.Provider>
  );
};
