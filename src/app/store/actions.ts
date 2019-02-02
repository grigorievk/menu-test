import { Action } from '@ngrx/store';
import { Item } from '../models/item';

export const ADD_ITEM = '[Item] Add Item';
export const REMOVE_ITEM = '[Item] Remove Item';

export class AddItem implements Action {
    readonly type = ADD_ITEM;
    constructor(public payload: Item) { }
}

export class RemoveItem implements Action {
    readonly type = REMOVE_ITEM;
    constructor(public payload: Item) { }
}

export type Action = AddItem | RemoveItem;
