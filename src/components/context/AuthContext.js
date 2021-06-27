import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "60cd7e348825fb0c28c388fa",
    proflePicture:
      "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXJvbiUyMG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    coverPicture:
      "https://images.unsplash.com/photo-1617745279890-6ffe02ea6ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXJrJTIwcmVhY3RvciUyMG1hcnZlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    followers: [],
    followings: [],
    isAdmin: false,
    username: "ironman",
    email: "iron@gmail.com",
    city: "las vegas",
    from: "toronto",
    relationship: "2",
    desc: "i am a genius",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
