import { connect } from 'react-redux';
import RoomList from '../components/RoomList';
import { addPlace } from '../actions';
import MakeRoom from './MakeRoom';

const mapStateToProps = state => {
  return {
    places: state.places.places,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: name => {
      dispatch(addPlace(name));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList);
