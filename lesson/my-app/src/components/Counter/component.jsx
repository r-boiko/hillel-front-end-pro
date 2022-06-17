import {connect} from "react-redux";

import {increment, decrement} from '../../store/counter/actions';
import {selectCounterNumber} from '../../store/counter/selectors';

const Counter = ({counterNumber, increment, decrement}) => (
  <div>
    <div>{counterNumber}</div>
    <button onClick={() => increment('increment')}>+</button>
    <button onClick={() => decrement('decrement')}>-</button>
  </div>
)

const mapStateToProps = state => ({
  counterNumber: selectCounterNumber(state),
});

const mapDispatchToProps = {
  increment,
  decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
