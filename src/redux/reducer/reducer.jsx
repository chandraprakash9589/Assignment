const initialData = {
  user: [],
  loginSucces: false,
  islogin : false
};

export function userReducer(state = initialData, action) {
  switch (action.type) {
    case "addUser":
      return {
        islogin:true, 
        user: [...state.user, action.users],
      };
    case "fetchuser":
      return {
        ...state,
      };
    case "showuser":
      return {
        ...state,
        user: action.payload,
      };
    case "login":
      const user = [...state.user];
      console.log(user);
      const findUser = user.filter(
        (list) =>
        list.email === action.payload.email &&
        list.password === action.payload.password
        );
        console.log(findUser);
        if (findUser.length > 0) {
          state.loginSucces = true;
        } else {
          state.loginSucces = false;
        }
        return {
          ...state,
          islogin : true
      };

    default:
      return state;
  }
}
