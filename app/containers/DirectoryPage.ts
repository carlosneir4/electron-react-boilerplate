import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Directory from '../components/directory/Directory';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators<any>(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
