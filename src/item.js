import React, {Component} from 'react'
import './App.css';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
        render() { 
    return (
        <div className="item">
            <div className="bigDiv">
                <div className="itemContainer">
                    <div className="imgDiv">
                        <img className="image" src={this.props.el.srcImg} alt='foulan'/>
                    </div>
                    <div className="namePhon">
                        <h4 className="name">{this.props.el.name}</h4>
                        <span className="phoneNumber">{this.props.el.phoneNumber}</span>
                        <button className="butt" onClick={()=>this.props.clicked(this.props.el.phoneNumber)}>remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default Item
