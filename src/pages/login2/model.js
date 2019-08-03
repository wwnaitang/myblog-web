export default {
  namespace: 'login2',
  state: {
    user: {
      username: "chenming",
      password: "123qwe",
    },
    remember: true,
  },
  reducers: {
    onChange: (state, {event}) => {
      if (event && event.target.id) {
        let id = event.target.id;
        let value = event.target.value;
        switch (id) {
          case "remember":
            state.remember = state.remember ? false : true;
            break;
          case "username":
          case "password":
            state.user[id] = value;
            break;
          default:
            break;
        }
      }
      return state;
    },
    onSubmit: (state) => {
      let {user, remember} = state;
      console.log(remember);
      console.log(user.username + ":" + user.password);
      return state;
    }
  },
}
