import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import User from '../components/user';
import { getUsers } from '../redux/actions/user';
const mapStateToProps = ({
    users = {}
}) => ({
    ...users
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    getUsers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User);