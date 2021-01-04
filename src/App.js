import React from "react";
import store from "./common/store";
import { addFriend, editFriend, removeFriend } from "./friend/state";
import { increaseNextPage, removeTimeline, addTimeline,editTimeline} from "./timeline/state";

   
export default function App() {
  

  store.dispatch(addTimeline({id:1,desc:'코딩은 즐거워'}));
  store.dispatch(addTimeline({id:2,desc:'리덕스 좋아'}));
  store.dispatch(increaseNextPage());
  store.dispatch(editTimeline({id:2,desc:'리덕스 너무 좋아'}));
  store.dispatch(removeTimeline({id:2,desc:'리덕스 너무 좋아'}));

  store.dispatch(addFriend({id:1,name:'아이유'}));
  store.dispatch(addFriend({id:2,name:'손나은'}));
  store.dispatch(editFriend({id:2,name:'수지'}));
  store.dispatch(removeFriend({id:1,name:'아이유'}));

  return (
    <div>
      실전리액트
    </div>
  );
}

