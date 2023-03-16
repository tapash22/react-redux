import { GET_TODOS_FAILD, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../contants/TodosConstant";

const instialTodos = {
  isLoding: false,
  todos: [],
  error: null,
};

const todosReducers = (state = instialTodos, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoding: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        isLoding: true,
        todos:action.payload,
        error:null
      };
    case GET_TODOS_FAILD:
      return {
        isLoding: false,
        todos:[],
        error:action.payload
      };

    default:
      return state;
  }
};

export default todosReducers;
