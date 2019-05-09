import React from 'react';
import {View, Linking, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';

export default class NewsRow extends React.PureComponent {
    render() {
        const {
            web_url,
            snippet,
            lead_paragraph,
            abstract,
            source,
            date,
            headline,
            image

        } = this.props.item;

        const { noteStyle, featuredTitleStyle } = styles;
        const time = moment(date || moment.now()).fromNow();
        const defaultImg =
            'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

        return (
            <TouchableOpacity
                useForeground
                onPress={this.props.onPress}
            >
                <Card
                    featuredTitle={headline}
                    featuredTitleStyle={featuredTitleStyle}
                    image={{
                        uri: image !== "" ? 'http://www.nytimes.com/'+image : 'https://st2.depositphotos.com/4740575/7202/v/600/depositphotos_72029957-stock-video-world-news-background.jpg'
                    }}
                    containerStyle={{padding: 0, marginHorizontal:0}}

                >
                    <Text style={{ marginBottom: 10 }} numberOfLines={5} >
                        {abstract || lead_paragraph || 'Read More..'}
                    </Text>
                    <Divider style={{ backgroundColor: '#dfe6e9' }} />
                    <View
                        style={{ flexDirection: 'row', justifyContent:'space-between' }}
                    >
                        <Text style={noteStyle}>{source}</Text>
                        <Text style={noteStyle}>{time}</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    }
}

const styles = {
    noteStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: '#b2bec3',
        fontSize: 12
    },
    featuredTitleStyle: {
        marginHorizontal: 5,
        textShadowColor: '#00000f',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3,
        padding: 0,
    }
};