import React, {Component} from 'react';
import { Base64 } from 'js-base64';


class Label extends Component {

  render() {
  	const chngCurrLabel = this.props.chngCurrLabel
  	let data = this.props.data
  	let name = data.Name
  	let type = data.Type
  	let color = data.Color
  	//console.log(data.RawRegexp)
  	let regexp = (data.RawRegexp!==''?Base64.decode(data.RawRegexp):'')
  	var style
  	if(color==="#ffffff"||color==="white") {
  	style ={ backgroundColor:color,
  				   'color':'black'}
  	}
  	else {
  	style =	{ backgroundColor:color,
  				   'color':'white'}	
  	}

  	var shortRegexp = regexp.length<14?regexp:regexp.slice(0,14)

  	return(
	  	<div className={regexp.length<14?"holder":"holder holder-with-block"}>
	  		<button style={style} className="label" onClick={chngCurrLabel}>{name}<br/>{type}<br/>{shortRegexp}</button>
	  		<div className="hide-block">{regexp}</div>
	  	</div>
	)
  }
}

export default Label;
