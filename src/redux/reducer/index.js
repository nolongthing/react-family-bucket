export default function reducer(state = {loginType:false}, action) {
  if (action.type === 'login') {
      return {
        ...state,
        loginType:true
      };
  }

  if(action.type === 'logout'){
      return {
        ...state,
        loginType:false
      };
  }
  return state;
}