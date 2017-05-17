import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar
} from 'material-ui';
import { 
    NestedList,
    LeftMenu,
    LoginButton,
} from '.';

const styles = {
    title: {
        cursor: 'pointer',
    },
};

const Header = () => {
    return (
        <div>
            <AppBar
                title={<span style={styles.title}>Seowon Mobile</span>}
                titleStyle={{ textAlign: 'center' }}
                onTitleTouchTap={
                    () => {console.log('111');}
                }
                iconElementLeft={<LeftMenu />}
                iconElementRight={<LoginButton logged={true} />}
                zDepth={2}
            >
            </AppBar>
        </div>
    );
};

export default Header;