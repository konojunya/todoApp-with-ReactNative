import AppDispatcher from "../dispatcher/AppDispatcher"
import { EventEmitter } from "events"
import AppConstants from "../constants/AppConstants"
import assign from "object-assign"

const CHANGE_EVENT = "change"

var _todos = {}

let create = (text) => {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  }
}

let AppStore = assign({},EventEmitter.prototype,{

  getAll(){
    return _todos
  },

  emitChange(){
    this.emit(CHANGE_EVENT)
  },

  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback)
  }

})

AppDispatcher.register((action)=>{

  switch(action.actionType){

    case AppConstants.TODO_CREATE:
      var text = action.text.trim()
      if(text != ""){
        create(text)
        AppStore.emitChange()
      }
      break

  }

})

export default AppStore