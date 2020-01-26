import { connect } from 'react-redux';
import SurfSessionIndexContainer from './surf_session_index_container';

class SurfSessionItem extends Reactl.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
              <li>{this.props.session.body}</li>
        )
              
    }
}

export default SurfSessionItem;