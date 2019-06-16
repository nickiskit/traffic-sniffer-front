import React, {Component} from 'react';
import Label from './Label'


class Labels extends Component {


state = {
  labels:[]
}


componentDidMount() {
    let temp 
    let allButton = {'Name':'Show all labels', 'Color':'black', 'Type':'', 'RawRegexp':'' }
    
    fetch('http://192.168.0.227:9999/getLabels')
    .then((response)=>{response.json().then((data)=> {
      temp = data.L
      temp.unshift(allButton)
      this.setState({labels:temp})})})
  }

componentDidUpdate(prevState) {
  let temp 
  let allButton = {'Name':'Show all labels', 'Color':'black', 'Type':'', 'RawRegexp':'' }
  if(prevState.labels!==this.state.labels) {
    fetch('http://192.168.0.227:9999/getLabels')
    .then((response)=>{response.json().then((data)=> {
      //let temp = data
      temp = data.L
      temp.unshift(allButton)
      this.setState({labels:temp})})})
  }
}

  
  render() {
    //console.log("from labels", this.state.labels)
    const chngCurrLabel = this.props.chngCurrLabel
  	let stateLabels = this.state.labels
    
   // stateLabels.unshift(allButton)
    let labels
    if(stateLabels.length) {
      labels = stateLabels.map((element, index)=>
        <div key={index} className="labels" >
        <Label data={element} chngCurrLabel={chngCurrLabel}/>
        </div>
        )
    }
    else {
      labels = <div></div>
    }

    return(
      <div className="label-cont">{labels}</div>
      )
  }
}

export default Labels;
