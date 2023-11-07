import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionsCreators from '../store/action-creators/index';

const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionsCreators, dispatch)
};

export default useActions;