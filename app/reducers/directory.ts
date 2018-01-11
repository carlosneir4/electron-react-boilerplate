// @flow
import { SHOW_OPEN_DIALOG, DialogAction } from '../actions/dialog';
const { dialog } = require('electron').remote;

export type directoryStateType = {
  path: string
};

export const defaultState: directoryStateType = {
  path: ''
};

export default function directory(state: directoryStateType = defaultState, action: DialogAction) {
  switch (action.type) {
    case SHOW_OPEN_DIALOG: {
      const dialogAction = action as DialogAction;
      var path = { ...state.path };
      dialog.showOpenDialog({
        defaultPath: dialogAction.defaultPath,
        properties: dialogAction.properties
      }, folder => {
        if (folder) {
          path = folder.toString();
        }
      });
      return { ...state, path };
    }
    default:
      return state;
  }
}
