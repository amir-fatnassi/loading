import React, { Component } from 'react'
import './App.css';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            valChang:'',
        }
    }
    handlChange = (e) =>{
        // this.setState({valChang:e.target.value})
        this.props.nameFilter(e.target.value)
    }
    render() {
        return (
            <div className="searchDiv">
                <div className="search">
                    <div className="textbutt">
                        <input className="inptext" type="text" placeholder='ay 7aja' onChange={this.handlChange} />
                        <input className="inpbut" type="button" value="ADD"
                        onClick={
                            ()=> this.props.addObject({
                            srcImg: prompt('src image:'),//'https://images.unsplash.com/photo-1549019421-b52ab378d5df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                            name:prompt('ameel:'),
                            phoneNumber:Number(prompt('phone Number:'))
                        })} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Header
