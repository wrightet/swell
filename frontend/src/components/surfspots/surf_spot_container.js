import { connect } from "react-redux";
import SurfSpot from './surf_spot'
import {createSurfSpot,clearSpotErrors} from '../../actions/surfspot_actions'

const mapStateToProps = state => ({
    currentUser: state.session.user,
    errors: state.errors.surfspot,
});

const mapDispatchToProps=dispatch=>({
    createSurfSpot: (spot)=>dispatch(createSurfSpot(spot)),
    clearSpotErrors: ()=>dispatch(clearSpotErrors())
})

export default connect(mapStateToProps,mapDispatchToProps)(SurfSpot);