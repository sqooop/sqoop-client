import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '../../store/modules/activity';
import { setPreviewImage } from '../../store/modules/preview';
import Image from '../../components/createActivity/Image';

const ImageContainer = () => {
  const dispatch = useDispatch();
  const saveImage = data => dispatch(setImage(data));
  const savePreviewImage = data => dispatch(setPreviewImage(data));
  const previewImage = useSelector(state => state.preview.previewImage);
  useEffect(() => {
    savePreviewImage('');
    saveImage('');
  }, []);
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
      savePreviewImage(reader.result);
    };
  };
  return <Image onChange={onChange} image={previewImage} />;
};

export default ImageContainer;
