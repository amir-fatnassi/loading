import React, { Component } from 'react'
import SpinnerComp from './spinn'

const SpinHoc = WrappedComponent => {
return class SpinHoc extends Component {
    render() {
        return (
            this.props.isLoad ? <SpinnerComp/> : <WrappedComponent {...this.props}/> 
        )
    }
}
}
export default SpinHoc
