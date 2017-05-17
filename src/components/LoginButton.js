import React from 'react';
import {
    IconButton,
    FlatButton,
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import LockIcon from 'material-ui/svg-icons/action/lock';
import LockOpenIcon from 'material-ui/svg-icons/action/lock-open';

// {/*<FlatButton
//         {...props}
//         label="Login"
//     />*/}\
const LoginButton = ({ logged }) => {
    return (
        <IconButton>
            {
                logged ? <LockIcon /> : <LockOpenIcon />
            }
        </IconButton>
    );
}
export default LoginButton;