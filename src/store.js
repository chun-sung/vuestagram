import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
      name: ' kim',         // 보관할 데이터 생성
      age: 20,
      likes: 30,
      좋아요눌렀니: false,
      more: {},
    }
  },
  mutations: {              // state수정방법 정의하는 곳
    이름변경(state) {        // 파라미터는 위에 state 객체를 의미한다.
      state.name = 'park'
    },
    나이증가(state, data) {
      state.age += data
    },
    좋아요(state) {
      if(state.좋아요눌렀니== false){
        state.likes++
        state.좋아요눌렀니 = true;
      } else {
        state.likes--
        state.좋아요눌렀니 = false;
      }
    },
    setMore(state, data) {
      state.more = data
    }    
  },
  actions: {  
    getData(context) {
      axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=> {
        console.log(a.data)
        context.commit('setMore', a.data)
      })
    },
  }
})

export default store