import { getTimezone, updateTimezone } from "../utils";

const initialState = {
    timezone: getTimezone() ? getTimezone() : ''

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
        default: return state
    }

}

export default timezoneReducer
