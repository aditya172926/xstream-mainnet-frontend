import { createContext, useEffect, useReducer } from "react";

const initialState = {
  showDashboard: false,
  showNotifications: false,
  showXStream: false,
  showStream: false,
  showSendStream: false,
}

export const RoutesContext = createContext(initialState);

const ACTIONS = {
  showDashboard: "show_dashboard",
  showNotifications: "show_notifications",
  showStream: "show_stream",
  showSendStream: "show_send_stream",
  showXStream: "show_x_stream",
};

function reducer(state, action) {
  switch (action.type) {
    
    case ACTIONS.showDashboard: {
      return { ...initialState, showDashboard: true };
    }
    
    case ACTIONS.showNotifications: {
      return { ...initialState, showNotifications: true };
    }
    case ACTIONS.showStream: {
      return { ...initialState, showStream: true };
    }
    case ACTIONS.showXStream: {
      return { ...initialState, showXStream: true };
    }
    case ACTIONS.showSendStream: {
      return { ...initialState, showSendStream: true };
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export const RoutesProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  useEffect(() => dispatch({ type: ACTIONS.showDashboard}), []);
  return (
    <RoutesContext.Provider
      value={{
        ...state,
        setDashboard: () => {
          dispatch({ type: ACTIONS.showDashboard});
        },
        setShowNotifications: () => {
          dispatch({ type: ACTIONS.showNotifications});
        },
        setShowStream: () => {
          dispatch({ type: ACTIONS.showStream});
        },
        setShowXStream: () => {
          dispatch({ type: ACTIONS.showXStream});
        },
        setSendStream: () => {
          dispatch({ type: ACTIONS.showSendStream});
        },
      }}
    >
      {children}
    </RoutesContext.Provider>
  );
};
