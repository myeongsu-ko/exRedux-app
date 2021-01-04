import createReducer from '../common/createReducer'

const ADD = 'friend/ADD';
const REMOVE = 'friend/REMOVE';
const EDIT = 'friend/EDIT'; //3개의 액션이 있구요

export const addFriend = friend => ({type: ADD, friend});
export const removeFriend = friend => ({type: REMOVE, friend});
export const editFriend = friend => ({type: EDIT, friend}); //action creator함수가 세개 있고

//
const INITIAL_STATE =  {friends:[]};
const reducer = createReducer(INITIAL_STATE,{
    [ADD]: (state,action) => state.friends.push(action.friend), //friends 배열에 friend를 추가하고
    [REMOVE]: (state,action) =>
    (state.friends = state.friends.filter(
        friend => friend.id !== action.friend.id,
    )), //해당 id 값에 해당하는 friend를 제거를 하고 
    [EDIT]: (state,action) => {
        const index = state.friends.findIndex(
            friend => friend.id === action.friend.id,
        );
        if(index >= 0){
            state.friends[index] = action.friend;
        }//해당하는 친구 정보를 수정하는 
    },
});
// 리듀서 코드
export default reducer;