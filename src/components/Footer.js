import React, { Component } from 'react';
// import {
//   FontIcon, Paper
// } from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import { Link } from 'react-router-dom';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const nearbyIcon = <IconLocationOn />;

const styles = {
    paper: {
        zDepth: 1,
    },
};

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
    }

    select = (index) => {
        this.setState({selectedIndex: index});
        // SPA인데 리로딩되는 문제점 Deprecated
        // document.location = "/about";
    }

    render() {
        return (
            <Paper style={styles.paper}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem 
                        label="Home"
                        icon={
                            recentsIcon
                        }
                        onTouchTap={() => this.select(0)}
                    >
                    </BottomNavigationItem>
                    <BottomNavigationItem 
                        label="About"
                        icon={recentsIcon}
                        onTouchTap={() => this.select(1)}
                    />
                    <BottomNavigationItem 
                        label="MQTT"
                        icon={nearbyIcon}
                        onTouchTap={() => this.select(2)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default Footer;