import { State } from './state';
import { RoomInfoActions,RoomInfoActionTypes } from './actions';

const initialState: State = {
  roomInfo: [
    {
        group: [],
        room: [],
        hotel: [],
        travelers: [],
        payments: [],
        transfer: [],
        agent: null
    }
  ]
};

export function roomInfoReducer(state = initialState, action: RoomInfoActions): State {
    switch (action.type) {
        case RoomInfoActionTypes.SET_ROOM_INFO:
            return {
                ...state,
                roomInfo: action.payload
            };
        default:
            return state;
    }
}
