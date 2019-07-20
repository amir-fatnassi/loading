import React, {Component} from 'react';
import Listitems from './listItems'
import Header from './header'
import './App.css';
const array=[
  {
    srcImg:'https://images.unsplash.com/photo-1554875002-0c7d5052463e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name:'lobna',
    phoneNumber:12345123
  },
  {
    srcImg:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name:'ahlem',
    phoneNumber:65900800
  },
  {
    srcImg:'https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name:'nesrin',
    phoneNumber:96547380
  },
  {
    srcImg:'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name:'assma',
    phoneNumber:24111365
  },
  {
    srcImg:'https://images.unsplash.com/photo-1547147607-6eab7b49f3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name:'fadwa',
    phoneNumber:74997334
  },
  {
    srcImg:'https://images.unsplash.com/photo-1548946526-f69e2424cf45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name:'khaled',
    phoneNumber:12098456
  },
]
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      newArray: array,
      isLoad:true
    }
  }
  ajout(newPerson){
  this.setState({
    newArray: this.state.newArray.concat(newPerson)
  })
  }
  componentDidMount(){
    setTimeout((
      () => this.setState({isLoad: false})),
      5000)
  }
  filterArray(valChang){
    let fill= array.filter((el)=>{return el.name.toLocaleLowerCase().indexOf(valChang)>-1})
    this.setState({newArray:fill})
  }
  supr(Num){
    this.setState({newArray: this.state.newArray.filter((el)=>Num!==el.phoneNumber)})
  }
  render(){
  return (
    <div className="App">
      <Header  nameFilter={(val)=>this.filterArray(val)} 
              addObject={(vale)=> this.ajout(vale)}
      />
      <Listitems
      newArray={this.state.newArray}
      isLoad={this.state.isLoad}
      clickNumber={(val)=>this.supr(val)}
      />
    </div>
  );
}
}

export default App;
