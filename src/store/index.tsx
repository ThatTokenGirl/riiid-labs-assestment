import React, { PropsWithChildren, useContext, useReducer } from "react";
import { combineReducers } from "redux";
import { bookmarksReducer } from "./bookmarks";
import { initialState, StoreContext } from "./context";

export * from "./bookmarks";

export const rootReducer = combineReducers({
  bookmarks: bookmarksReducer,
});

export const StoreProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);