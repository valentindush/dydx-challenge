import { State } from './state';
import { RoomInfoActions,RoomInfoActionTypes } from './actions';

const initialState: State = {
  roomInfo: [
    {
        group: null,
        room: [],
        hotel: [],
        travelers: [],
        payments: [],
        transer: [],
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
