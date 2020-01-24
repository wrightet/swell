import { connect } from "react-redux";
import SurfSpot from './surf_spot'
import {createSurfSpot} from '../../actions/surfspot_actions'

const mapStateToProps = state => ({
    currentUser: state.session.user,
});

const mapDispatchToProps=dispatch=>({
    createSurfSpot: (spot)=>dispatch(createSurfSpot(spot))
})

export default connect(mapStateToProps,mapDispatchToProps)(SurfSpot);