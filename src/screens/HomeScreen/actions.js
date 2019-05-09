import axios from 'axios';
import { Alert } from 'react-native';
export const load_api_from_link = payload => {
    return dispatch => {
        var page = 0;
        if(payload.page){
            page = payload.page
        }
        var query = "";
        if(payload.search && payload.search !== ""){
            query = '&q='+payload.search;
        }

        axios
            .get('https://api.nytimes.com/svc/search/v2/articlesearch.json?page='+page+query+'&sort=newest&api-key=OAD0Qz0csaoDZLpw5ZR74TCeSjynnabJ')
            .then(res => {
                var array;
                if(payload.items){

                     array = payload.items;
                }else{
                     array = [];

                }

                res.data.response.docs.map(res => {
                    try {
                        let object = {
                            headline: res.headline.main,
                            web_url: res.web_url,
                            byline: res.byline.original,
                            subsection_name: res.subsection_name,
                            snippet: res.snippet,
                            lead_paragraph: res.lead_paragraph,
                            abstract: res.abstract,
                            source: res.source,
                            date: res.pub_date,
                            image: res.multimedia.length > 0 ? res.multimedia[0].url:"",
                            all_images: res.multimedia.length > 0 ? res.multimedia:""
                        };

                        array.push(object);
                    } catch (error) {}
                });
                dispatch({
                    type: "set_items",
                    payload: array
                });
            })
            .catch(err => {});
    };
};

export const goToDetailsPressed = payload => {
    return {
        type: 'go_to_view_details',
        payload: payload
    };
};

export const changeIndicator = payload => {
    return {
        type: 'change_indicator',
        payload: payload
    };
};

