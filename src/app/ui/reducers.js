import { UI_NAVIGATE } from './actions';

export default (state = {}, { type, route }) => {
  if (type === UI_NAVIGATE) {
    return Object.assign({}, state, {
      route,
    });
  }
  return state;
};
