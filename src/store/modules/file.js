const SET_PREVIEW_FILE = 'FILE/SET_PREVIEW_FILE';

export const setPreviewFile = previewFile => ({
  type: SET_PREVIEW_FILE,
  previewFile,
});

const initialState = {
  previewFile: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PREVIEW_FILE:
      return {
        previewFile: action.previewFile,
      };
    default:
      return state;
  }
}
