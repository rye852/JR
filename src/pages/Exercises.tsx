import { useLoaderData } from 'react-router-dom';
import { ExerciseType } from '../components/ExercisesCard';
import { Grid } from '@mui/material';
import { ExercisesCard } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, inLoad, outLoad } from '../store';
import { useEffect } from 'react';
const Exercises = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((stor: RootState) => stor.loading);
  const handleClick = () => {
    return dispatch(inLoad());
  };
  const exercises = useLoaderData() as ExerciseType[];
  useEffect(() => {
    const forEffect = () => {
      return dispatch(outLoad());
    };
    forEffect();
  }, [dispatch, exercises]);
  return isLoading ? (
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
    <Grid alignItems={'center'} container rowSpacing={3} columnSpacing={3}>
      {exercises?.map((exercise, ind) => (
        <ExercisesCard
          handleClick={handleClick}
          exercise={exercise}
          key={ind}
        />
      ))}
    </Grid>
  );
};

export default Exercises;
