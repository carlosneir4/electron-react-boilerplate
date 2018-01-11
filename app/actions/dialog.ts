import { Action } from 'redux';
const { app, dialog } = require('electron').remote;
const readdirp = require('readdirp');

export const SET_PATH_DIRECTORY = 'SET_PATH_DIRECTORY';
export const ADD_ELEMENT_DIRECTORY = 'ADD_ELEMENT_DIRECTORY';

export interface DialogAction extends Action {
  defaultPath?: string;
}

export interface AddElementAction extends Action {
  elementTree?: ObjectTree;
}

export interface ObjectTree {
  name: string,
  path: string,
  parent: string,
  parentPath: string,
  isDirectory: boolean,
  ext: string,
  pathSplit: string[]
}

export const setPath = (path: string): DialogAction => ({
  type: SET_PATH_DIRECTORY,
  defaultPath: path
});

export const addElementDirectory = (object: ObjectTree): AddElementAction => ({
  type: ADD_ELEMENT_DIRECTORY,
  elementTree: object
});


export function openDialog() {
  return (dispatch: (action: DialogAction) => void) => {
    dialog.showOpenDialog({
      defaultPath: app.getPath('userData'),
      properties: ['openDirectory', 'openFile']
    }, folder => {
      if (folder) {
        dispatch(setPath(folder));
        var settings = {
          root: folder.toString(),
          entryType: 'all',
        };
        readdirp(settings)
          .on('data', function (entry) {
            var pathArray = entry.fullParentDir.split('\\');
            var object: ObjectTree = {
              name: entry.name,
              path: entry.fullPath,
              parent: pathArray[pathArray.length - 1],
              parentPath: entry.fullParentDir,
              isDirectory: entry.stat.isDirectory(),
              ext: !entry.stat.isDirectory() ? entry.name.split(".")[1] : null,
              pathSplit: entry.fullPath.split('\\')
            };
            dispatch(addElementDirectory(object));
          })
          .on('warn', function (warn) {
            console.log("Warn: ", warn);
          })
          .on('error', function (err) {
            console.log("Error: ", err);
          })
          .on('end', function () {
            console.log("End load directory");
          });
      }
    });
  };
}


