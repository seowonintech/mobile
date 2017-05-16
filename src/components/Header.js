import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, IconButton, FlatButton
} from 'material-ui';
import NestedList from './NestedList';

const LoginButton = () => (
    <FlatButton label="Login" />
)

const LockButton = () => (
    <IconButton iconClassName="muidocs-icon-custom-github" />
);

const Header = () => {
    return (
        <div>
            <AppBar
                title="Seowon Mobile"
                titleStyle={{ textAlign: 'center' }}
                onTitleTouchTap={
                    () => {console.log('111');}
                }
                iconElementRight={<LoginButton />}
                zDepth={2}
            >
                <NestedList />
            </AppBar>
        </div>
    );
};

export default Header;