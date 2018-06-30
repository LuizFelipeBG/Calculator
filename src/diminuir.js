import React,{Component} from 'react'
import App from './App';

class diminuir extends Component { 
    render() {
        const diminuir = (leftinput,rightinput) => {
            return leftinput - rightinput
        }
        return( 
            console.log(diminuir())
        );
    }
}
export default diminuir