const SET_PREVIEW_FILE = 'FILE/SET_PREVIEW_FILE';
const SET_PREVIEW_IMAGE = 'FILE/SET_PREVIEW_IMAGE';

export const setPreviewFile = previewFile => ({
  type: SET_PREVIEW_FILE,
  previewFile,
});

export const setPreviewImage = previewImage => ({
  type: SET_PREVIEW_IMAGE,
  previewImage,
});

const initialState = {
  previewFile: '',
  previewImage: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PREVIEW_FILE:
      return {
        ...state,
        previewFile: action.previewFile,
      };
    case SET_PREVIEW_IMAGE:
      return {
        ...state,
        previewImage: action.previewImage,
      };
    default:
      return state;
  }
}
