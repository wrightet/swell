import { connect } from "react-redux";
import SurfSpot from './surf_spot'


const mapStateToProps = state => ({
    currentUser: state.session.user,
});

export default connect(mapStateToProps)(SurfSpot);