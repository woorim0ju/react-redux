import React from 'react';
import {connect} from 'react-redux';
//import { addSubscriber } from '../redux/subscribers/actions'; //아래 index.js로 코드 간결하게
import { addSubscriber } from '../redux/index'; // '/index 삭제해도됨

// const Subscribers = (props) => {
//     return (
//         <div className='items'>
//           <h2>구독자수: {props.count}</h2>
//           <button onClick={()=>props.addSubscriber()}>구독하기</button>
//         </div>
//     );
// };

const Subscribers = ({count, addSubscriber}) => { //destructuring
    return (
        <div className='items'>
          <h2>구독자수: {count}</h2>
          <button onClick={()=>addSubscriber()}>구독하기</button>
        </div>
    );
};

const mapStateToProps = (state) => { //props.count
    console.log(state);
    return {
        count: state.subscribers.count //count가 props로 전달됨
    }
}

// const mapDispatchToProps = (dispatch) => { //함수로 전달
//  return {
//      addSubscriber: () => dispatch(addSubscriber())//addSubscriber가 props로 전달됨
//  }
// }

const mapDispatchToProps = {
    addSubscriber //객체로 전달, addSubscriber: addSubscriber
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);