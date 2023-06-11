import { ListCard } from '../components';
import { Grid, Typography } from '@mui/material';
import { listType } from '../helpers/lists';
import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, inLoad, outLoad } from '../store';
import { useEffect } from 'react';

const ListPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((stor: RootState) => stor.loading);
  const handleClick = () => {
    return dispatch(inLoad());
  };
  const items = useLoaderData() as listType | string;
  useEffect(() => {
    const forEffect = () => {
      return dispatch(outLoad());
    };
    forEffect();
  }, [dispatch, items]);
  console.log(items);
  return (
    <>
      {isLoading ? (
        <div className="center">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      ) : (
        <>
          {typeof items == 'string' ? (
            <Typography variant="h4" color={'error'}>
              {items}
            </Typography>
          ) : (
            <Grid
              alignItems={'center'}
              container
              rowSpacing={3}
              columnSpacing={3}>
              {items.map((bodyPart, ind) => (
                <ListCard
                  handleClick={handleClick}
                  imgUrl={bodyPart.imgUrl}
                  name={bodyPart.name}
                  type={bodyPart.type}
                  key={ind}
                />
              ))}
            </Grid>
          )}
        </>
      )}
    </>
  );
};

export default ListPage;
