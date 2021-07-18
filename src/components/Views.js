import React, { useState } from 'react';
import {connect} from 'react-redux';
import { addView, removeView } from '../redux/index';


const Views = ({count, addView, removeView}) => { //destructuring
const [number, setNumber] = useState(1)

    return (
        <div className='items'>
          <h2>조회 수: {count}</h2>
        {/* input value가 onChange될때마다 number값에 저장 */}
        <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} />    
        <button onClick={()=>addView(number)}>증가</button>
        <button onClick={()=>removeView(number)}>감소</button>
         
        
        </div>
    );
};

const mapStateToProps = (state) => { //props.coun
    return {
        count: state.views.count //count가 props로 전달됨
    }
}


const mapDispatchToProps = { 
    addView: (number) => addView(number), //메서드로 전달
    removeView, //객체 전달
}

export default connect(mapStateToProps, mapDispatchToProps)(Views);