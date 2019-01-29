import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromItems from './items';

export interface State {
    items: fromItems.State;
}

export const reducers: ActionReducerMap<State> = {
    items: fromItems.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const getItemState = createFeatureSelector<fromItems.State>('items');

export const getSelected = createSelector(getItemState, fromItems.getSelected);

export const getTotalCount = createSelector(
    getSelected,
    (items) => {
        return items.length;
    }
);

export const getTotalPrice = createSelector(
    getSelected,
    (items) => {
        if (items.length) {
            return items.reduce((acc, curValue) => acc + curValue.price, 0);
        } else {
            return 0;
        }
    }
);


