import React, {Component} from 'react';
import {
    Text, StyleSheet, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, NetInfo,
    Button, FlatList, ActivityIndicator, ScrollView
} from 'react-native';
import {connect} from 'react-redux';

import {
    load_api_from_link,
    goToDetailsPressed,
    changeIndicator
} from './actions';
import NewsRow from "../../components/NewsRow";
import {SearchBar} from "react-native-elements";

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            search:""
        };
    }

    componentWillMount() {
        this.props.load_api_from_link({search:this.state.search})
    }

    nextData() {
        if (this.props.indicator === false) {
            let page = this.state.page + 1;
            this.setState({page: page});
            this.props.changeIndicator(true);
            this.props.load_api_from_link({items: this.props.items, page: page, search:this.state.search});
        }
    }

    refresh() {
        this.props.load_api_from_link({search:this.state.search})

    }
    updateSearch = search => {
        this.setState(state => ({ ...state, search: search || "" }));
        this.props.load_api_from_link({search:search});

    };




    render() {
        return (
            <View style={{flex:1, flexDirection:'column'}}>
            <SearchBar
                placeholder="Search Here..."
                onChangeText={this.updateSearch}
                value={this.state.search}
                onCancel={this.updateSearch}
                onClear={this.updateSearch}
            />
            <View style={{backgroundColor: '#ededed', flex:1}}>
                <FlatList
                    data={this.props.items}
                    renderItem={({item}) => <NewsRow item={item}
                                                     onPress={() => this.props.navigation.navigate('ViewDetailsScene', {item: item})}/>}
                    keyExtractor={item => item.url}
                    refreshing={false}
                    onRefresh={this.refresh.bind(this)}
                    onEndReached={this.nextData.bind(this)}

                    ListFooterComponent={() => this.props.indicator ?
                        <ActivityIndicator size="large" color="#0000ff"/> :
                        <View style={{margin: 0, padding: 0}}></View>
                    }
                />
            </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});

const mapStateToProps = ({homered}) => {
    return {
        items: homered.items,
        indicator: homered.indicator,

    };
};

export default connect(
    mapStateToProps,
    {
        load_api_from_link,
        goToDetailsPressed,
        changeIndicator
    }
)(HomeScreen);
