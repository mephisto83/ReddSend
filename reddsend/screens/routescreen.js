import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Util } from 'redquicklib';
import { Actions } from 'react-native-router-flux';
import {
    Container,
    Header,
    Footer,
    FooterTab,
    Body,
    Content,
    Button,
    Thumbnail,
    Left,
    Icon,
    List,
    Right,
    ListItem,
    Spinner,
    View,
    Text
} from 'native-base';
import { ScrollView, AppState, Dimensions } from 'react-native';
import { ListView } from 'react-native';
import FastImage from 'react-native-fast-image';
require('redquicklib/lib/array')

import { RedConnect, common, UIA } from 'redquicklib';
import * as Titles from '../titles';
Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
class RouteScreen extends Component {
    constructor(props) {
        super(props);
        var me = this;
        AppState.addEventListener('change', state => {
            console.log('AppState changed to', state)
            me.props.updateCoins();
        })
        this.state = {
        }
    }
    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
    }
    componentWillUnmount() {
        var me = this;
        me.mounted = false;
    }
    componentDidMount() {
        var me = this;
        me.props.loadCoins();
    }
    render() {
        const { region, state } = this.props;
        var me = this;
        var coins = UIA.Get(state, CA.COINS) || [];
        return (
            <Container>
                <Header>
                    <Button transparent onPress={Actions.Graphs}>
                        <Icon name="md-menu" />
                    </Button>
                    {common.HeaderTitle(`$${totalusd.toFixed(4).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`)}
                    <Right>
                        {!UIA.IsBusy(state, [CA.GETTING_COINS]) ? (<Button transparent onPress={() => {
                            me.props.updateCoins();
                        }}>
                            <Icon name="md-refresh" />
                        </Button>) : <Spinner />}
                    </Right>
                </Header>


                <Content>

                </Content>
                <Footer>
                    <FooterTab>
                        <Button onPress={Actions.ConfigureCoins}>
                            <Text>{Titles.ConfigureCoins}</Text>
                        </Button>
                        <Button onPress={() => {
                            me.props.snapshot();
                        }}>
                            <Text>{Titles.Snapshot}</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = {
};

export default RedConnect(RouteScreen); 