import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailImage } from '../../../store/modules/detail';
import { setPreviewImage } from '../../../store/modules/preview';
import Image from '../../../components/activityOne/edit/PhotoUpload';

const ImageContainer = () => {
  const dispatch = useDispatch();
  const saveImage = data => dispatch(setDetailImage(data));
  const savePreviewImage = data => dispatch(setPreviewImage(data));
  const user = useSelector(state => state.detail.detailImageUrl);
  const previewImage = useSelector(state => state.preview.previewImage);

  const onChange = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    saveImage(file);
    if (file) {
      reader.readAsDataURL(file);
    } else {
      savePreviewImage(previewImage);
    }
    reader.onloadend = () => {
      saveImage(reader.result);
    };
  };
  return <Image onChange={onChange} image={previewImage} user={user} />;
};

export default ImageContainer;
