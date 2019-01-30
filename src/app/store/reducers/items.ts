import {Action, createSelector} from '@ngrx/store';
import * as itemAction from '../actions/items';

import { Item } from '../../models/item';

export interface State {
    items: Item[];
}

export const initialState: State = {
    items: []
};

export function reducer(state = initialState, action: itemAction.Action) {
    switch (action.type) {
        case itemAction.ADD_ITEM: {
            const newItem: Item = action.payload;

            return {
                ...state,
                items: [ ...state.items, newItem ]
            };
        }
        case itemAction.REMOVE_ITEM: {
            const remItem = action.payload;

            return {
                ...state,
                items: state.items.filter(filterItem => filterItem.id !== remItem.id)
            };
        }
        default:
            return state;
    }
}

export const getSelected = (state: State) => state.items;
