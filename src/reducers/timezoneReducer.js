import { updateTimezone } from "../utils";

const initialState = {
    timezone: ''

}



export const timezoneReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'timezone': {
            updateTimezone(action.payload);
            return {
                ...state,
                timezone: action.payload
            }
        }
    }

}

export default timezoneReducer
