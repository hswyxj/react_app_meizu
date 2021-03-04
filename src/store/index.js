/*
 * @Author: hesw
 * @Date: 2021-03-04 11:31:24
 * @Description: 
 */
import { createStore, combineReducers } from "redux";
import { chatReducer  } from "./calculate";

// 全局你可以创建多个reducer 在这里统一在一起
const rootReducers = combineReducers({chatReducer })
// 全局就管理一个store
export const store = createStore(rootReducers)