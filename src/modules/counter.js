/* ----------------- 액션 타입 ------------------ */
const SET_DIFF =  'counter/SET_DIFF'; // 얼마만큼 더하거나 뺄지
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
// 덕스 패턴에서는 액션 타입을 정의할 때 이와 같이 접두사를 붙임.
// 다른 모듈과 이름이 중복되지 않게 하기 위함.

/* ----------------- 액션 생성 함수 ------------------ */
export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/* ----------------- 모듈의 초기 상태 ------------------ */
const initialState = {
  number: 0,
  diff: 1,
};

/* ----------------- 리듀서 ------------------ */
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
