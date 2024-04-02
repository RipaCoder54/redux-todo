import { createStore } from 'redux';
import {reducer} from './ReducerTodo'
export  const store =createStore(reducer)

console.log(store,"s");