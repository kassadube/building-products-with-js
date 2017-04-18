import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from '../../components/navbar';
import User from '../../components/user';
import {getUser} from '../../store/actions';


const mapStateToProps = state => ({
  user: state.auth.user,
  loadedUser: state.users.user,
});

const mapDispatchToProps = dispatch => ({
  getUser: (payload) => { dispatch(getUser(payload)); },
});

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.props.getUser(this.props.params);
  }
  render() {
    const {user, params, loadedUser} = this.props;
    return (<div>
      <Navbar user={user} />
      <div>
           Profile: {params.id}
      </div>
      <User user={loadedUser} />
      
    </div>);
  }
}

Profile.propTypes = {
  user: PropTypes.object,
  params: PropTypes.object,
  getUser: PropTypes.func,
  loadedUser: PropTypes.object,
};
Profile.defaultProps = {
  user: {},
  params: {},
  getUser: e => e,
  loadedUser: {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
