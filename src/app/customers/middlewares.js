import { CUSTOMERS_LIST } from './actions';
import { navTo } from '../ui/actions';

export default ({ dispatch }) => next => (action) => {
  next(action);
  if (action.type === CUSTOMERS_LIST) {
    dispatch(navTo('customers'));
  }
};
