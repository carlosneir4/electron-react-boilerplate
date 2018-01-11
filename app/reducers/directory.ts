// @flow
import {
  SET_PATH_DIRECTORY,
  ADD_ELEMENT_DIRECTORY,
  AddElementAction,
  DialogAction,
  ObjectTree
} from '../actions/dialog';

const _ = require('lodash');

export type directoryStateType = {
  path: string | undefined
  treePath: ObjectTree[]
};

export const defaultState: directoryStateType = {
  path: '',
  treePath: []
};

function iteratePath(items, pathArray, depthRoot, depthElement) {
  var currentItem = items;
  var match;
  for (var i = depthRoot; i < depthElement; i++) {
    match = getMatchItems(currentItem, pathArray[i]);
    if (match && match.children) {
      currentItem = match.children;
    }
  }
  return match;
}

function getMatchItems(items, path) {
  return _.find(items, _.matchesProperty('name', path));
}

export default function directory(state: directoryStateType = defaultState, action: DialogAction) {
  switch (action.type) {
    case SET_PATH_DIRECTORY: {
      const dialogAction = action as DialogAction;
      const path = dialogAction.defaultPath;
      return { ...state, path };
    }
    case ADD_ELEMENT_DIRECTORY: {
      const dialogAction = action as AddElementAction;
      var object = dialogAction.elementTree;
      var copyState = { ...state };
      if (object && state.path) {
        var matchedItems = iteratePath(
          copyState.treePath, object.pathSplit,
          state.path.toString().split("\\").length - 1,
          object.pathSplit.length - 1
        );
        if (matchedItems) {
          if (!matchedItems.children) {
            matchedItems.children = [];
          }
          matchedItems.children.push(object);
        } else {
          copyState.treePath.push(object);
        }
      }
      return copyState;
    }
    default:
      return state;
  }
}

