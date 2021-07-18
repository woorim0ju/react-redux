import React from 'react';
import {connect} from 'react-redux';

const Display = (props) => {
    return (
        <div>
            <p>구독자수{props.count}</p>
        </div>
    );
};


const mapStateToProps = (state) => { //props.count
    return {
        count: state.subscribers.count //count가 props로 전달됨
    }
}

export default connect(mapStateToProps)(Display);