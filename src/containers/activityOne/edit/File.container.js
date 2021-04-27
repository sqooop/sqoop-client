import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDetailFile,
  setDetailFilename,
} from '../../../store/modules/detail';
import { setPreviewFile } from '../../../store/modules/preview';
import File from '../../../components/activityOne/edit/FileUpload';

const FileContainer = () => {
  const dispatch = useDispatch();
  const saveFile = data => dispatch(setDetailFile(data));
  const saveFilename = data => dispatch(setDetailFilename(data));
  const savePreviewFile = data => dispatch(setPreviewFile(data));
  const previewFile = useSelector(state => state.detail.detailFilename);

  const onChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
      saveFilename(file.name);
    } else {
      saveFilename(previewFile);
    }

    saveFile(file);
  };

  const onClick = event => {
    event.preventDefault();

    saveFilename('');
    saveFile('');
    savePreviewFile('');
  };

  return (
    <File onChange={onChange} previewFile={previewFile} onClick={onClick} />
  );
};

export default FileContainer;
