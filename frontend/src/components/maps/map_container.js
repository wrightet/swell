import { connect } from "react-redux";
import Mapping from './map';

import {requestSurfSpots} from '../../actions/surfspot_actions'


const mDTP = dispatch => ({
    requestSurfSpots: ()=>dispatch(requestSurfSpots())
});

export default connect(null,mDTP)(Mapping);