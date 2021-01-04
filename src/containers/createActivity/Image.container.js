import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '../../store/modules/activity';
import Image from '../../components/CreateActivity/Image';

const ImageContainer = () => {
  const dispatch = useDispatch();
  const saveImage = data => dispatch(setImage(data));
  const image = useSelector(state => state.activity.image);

  const onChange = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      saveImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return <Image onChange={onChange} image={image} />;
};

export default ImageContainer;
