// let attendlist = realm.objects("AttendModel");
var INITAL_STATE = {
	// data: attendlist,
	refreshing: false,
	items: [],
    indicator:true
};


export default (state = INITAL_STATE, action) => {
	switch (action.type) {

        case 'set_items':
            return {
                ...state,
                items: action.payload,
                indicator: false

            };

        case 'change_indicator':
            return {
                ...state,
                indicator: action.payload
            };

		default:
			return state;
	}
};

