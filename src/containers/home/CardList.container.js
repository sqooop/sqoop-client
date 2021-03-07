import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readCard, unloadCard } from '../../../src/store/modules/cardList';
import CardItem from '../../components/home/CardItem';

const CardItemContainer = ({ match }) => {
  const { cardId } = match.params;
  const dispatch = useDispatch();
  const { card, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: error.error,
    loading: loading[`cardItem/READ_CARD`],
  }));
  useEffect(() => {
    dispatch(readCard(cardId));
    return () => {
      dispatch(unloadCard);
    };
  }, [dispatch, cardId]);
  return <CardItem card={card} loading={loading} error={error} />;
};

export default CardItemContainer;
