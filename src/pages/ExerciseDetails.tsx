import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, inLoad, outLoad } from '../store';
import { useEffect } from 'react';
import { ExerciseType } from '../components/ExercisesCard';
import { DetailsBody } from '../components';


export type ExerciseDetailsType = {
  exerciseDetails: ExerciseType;
  sameTarget: ExerciseType[];
  sameBodyPart: ExerciseType[];
  sameEquipement: ExerciseType[];
};

const ExerciseDetails = () => {

  const dispatch = useDispatch();
  const { isLoading } = useSelector((stor: RootState) => stor.loading);
  const handleClick = () => {
    return dispatch(inLoad());
  };
  const { exerciseDetails, sameTarget, sameBodyPart, sameEquipement } =
    useLoaderData() as ExerciseDetailsType;

  useEffect(() => {
    const forEffect = () => {
      return dispatch(outLoad());
    };

    forEffect();

  }, [dispatch, exerciseDetails]);


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
    <DetailsBody
      exerciseDetails={exerciseDetails}
      sameBodyPart={sameBodyPart}
      sameTarget={sameTarget}
      sameEquipement={sameEquipement}
      handleClick={handleClick}
    />
  );
};

export default ExerciseDetails;
