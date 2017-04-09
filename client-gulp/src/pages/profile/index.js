import React from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import Navbar from '../../components/navbar';


const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({

});

const Profile = ({user}) => (
  <div>
    <Navbar user={user} />
    <div>
        Profile
      </div>
  </div>
  );

Profile.propTypes = {
  user: PropTypes.object,
};
Profile.defaultProps = {
  user: {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
