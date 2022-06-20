// 액션 생성 함수
export const clickImg = () => {
    return {type: 'CLICK'}
}

// 초기값
const initialState = {
    thumbnailImgSrc: 'assets/images/post-background6.jpg',
}

// Reducer 함수
const thumbnailImgReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CLICK':
            return {
                ...state,
                thumbnailImgSrc: action.thumbnailImgSrc,
            }
        default:
            return state;
    }
}

export default thumbnailImgReducer;