import AppDispatcher from "../dispatcher/AppDispatcher"
import AppConstants from "../constants/AppConstants"

const AppActions = {

  create(text){
    AppDispatcher.dispatch({
      actionType: AppConstants.TODO_CREATE,
      text: text
    });
  },

}

export default AppActions