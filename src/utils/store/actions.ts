import { RoomInfo } from "../types";

export enum RoomInfoActionTypes {
    SET_ROOM_INFO = 'SET_ROOM_INFO'
}

export interface SetRoomInfoAction {
    type: RoomInfoActionTypes.SET_ROOM_INFO;
    payload: RoomInfo;
}

export type RoomInfoActions = SetRoomInfoAction;
