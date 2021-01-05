import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFile } from '../../store/modules/activity';
import { setPreviewFile } from '../../store/modules/file';
import File from '../../components/createActivity/File';

const FileContainer = () => {
  const dispatch = useDispatch();
  const saveFile = data => dispatch(setFile(data));

  const savePreviewFile = data => dispatch(setPreviewFile(data));
  const previewFile = useSelector(state => state.file.previewFile);

  return (
    <File
      saveServerFile={saveFile}
      savePreviewFile={savePreviewFile}
      previewFile={previewFile}
    />
  );
};

export default FileContainer;
