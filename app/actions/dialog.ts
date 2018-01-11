import { Action } from 'redux';
const { app } = require('electron').remote;

export const SHOW_OPEN_DIALOG = 'SHOW_OPEN_DIALOG';

export interface DialogAction  extends Action {
  defaultPath?: string;
  properties: string[];
}

export const openDialog = (): DialogAction => ({
  type: SHOW_OPEN_DIALOG,
  properties: ['openDirectory', 'openFile'],
  defaultPath: app.getPath('userData')
});
