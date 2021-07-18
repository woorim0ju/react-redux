import {FETCH_COMMENTS, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE} from './types';

export const fetchComments = () => {
    //fetch 이벤트 작성
    //redux-thunk를 썼기때문에 return으로 dispatch를 인자로 넘겨받아 액션 함수를 사용함
    //redux-thunk를 이용하여 fetch 이벤트를 순차적으로 발생시킴 
    return(dispatch) => { 
        dispatch(fetchCommentRequest())
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then( res => res.json())
        .then(commments => dispatch(fetchCommentSuccess(commments)) )
        .catch(err => dispatch(fetchCommentFailure(err)))
    }
}

const fetchCommentSuccess = (comments) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

const fetchCommentFailure = (err) => {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: err  
    }
}

const fetchCommentRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST
    }
}