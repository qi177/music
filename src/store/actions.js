import * as types from "./mutations-type"
import {playMode} from "../common/js/config"
import {shuffle} from "../common/js/util"
export const selectPlay = function({commit},{list,index}){
    commit(types.SET_PLAYLIST,list);
    commit(types.SET_CURRENT_INDEX,index);
    commit(types.SET_SEQUENCE_LIST,list);
    commit(types.SET_FULL_SCREEN,true);
    commit(types.SET_PLAYING_STATE,true);
};
export const randomPlay = function({commit},{list}){ //randomPlay传入的list值是打乱list之后的值
    commit(types.SET_PLAY_MODE,playMode.random);
    commit(types.SET_SEQUENCE_LIST,list);
    let randomList = shuffle(list); //随机设置了一下
    commit(types.SET_PLAYLIST,randomList);
    commit(types.SET_CURRENT_INDEX,0);
    commit(types.SET_FULL_SCREEN,true);
    commit(types.SET_PLAYING_STATE,true);
}