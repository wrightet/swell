import { connect } from "react-redux";
import Profile from './profile';

const mapStateToProps = state => ({
  currentUser: state.session.user,
});

export default connect(mapStateToProps)(Profile);