import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Directory from '../components/directory/Directory';
import * as DiallogActions from '../actions/dialog';

function mapStateToProps(state) {
  return {
    directory: state.directory
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators<any>(DiallogActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
