// my Files
import './index.css';
import App from './App';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import { fetchFromApi } from './helpers/fetchAPI';
import ListPage from './pages/ListPage';
import { bodyPartList, targetList, equipmentList } from './helpers/lists';
import ExerciseDetails from './pages/ExerciseDetails';
import { ExerciseType } from './components/ExercisesCard';
import Page404 from './pages/Page404';
// Other Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';
import { store } from './store';
const suggetFilter = (array: ExerciseType[], id: string) => {
  let newArr: ExerciseType[] = array.slice(0, 5);

  if (newArr.some((exercise) => exercise.id == id)) {
    newArr = newArr.filter((exercise) => exercise.id !== id);
  } else {
    newArr.shift();
  }

  return newArr;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Page404 />,
      },
      {
        path: 'exercises/:type/:name',
        element: <Exercises />,
        errorElement: <Page404 />,
        loader({ params: { type, name } }) {
          const func = async () => {
            try {
              if (type === 'all' && name === 'all') {
                const response: [] | 'string' = await fetchFromApi('');
                console.log(response);
                return response.slice(0, 100);
              } else {
                const response: [] | 'string' = await fetchFromApi(
                  `/${type}/${name}`
                );
                console.log(response);
                return response;
              }
            } catch (error) {
              console.log('helllo');
              return error;
            }
          };
          return func();
        },
      },
      {
        path: 'list/:list',
        element: <ListPage />,
        errorElement: <Page404 />,
        loader({ params: { list } }) {
          if (list === 'bodyPart') {
            return bodyPartList;
          } else if (list === 'target') {
            return targetList;
          } else if (list === 'equipment') {
            return equipmentList;
          } else {
            return new Error('Page Not found');
          }
        },
      },
      {
        path: 'exerciseDetails/:id',
        element: <ExerciseDetails />,
        loader({ params }) {
          const func = async () => {
            try {
              const exerciseDetails: ExerciseType = await fetchFromApi(
                `/exercise/${params.id}`
              );

              // Target
              const allTarget: ExerciseType[] = await fetchFromApi(
                `/target/${exerciseDetails.target}`
              );
              const exerciseTargetSugget = suggetFilter(
                allTarget,
                exerciseDetails.id
              );
              // Body Part
              const allBodyPart: ExerciseType[] = await fetchFromApi(
                `/bodyPart/${exerciseDetails.bodyPart}`
              );
              const exerciseBodyPartSugget = suggetFilter(
                allBodyPart,
                exerciseDetails.id
              );
              // Equipememnt
              const allEquipment: ExerciseType[] = await fetchFromApi(
                `/equipment/${exerciseDetails.equipment}`
              );
              const exerciseEquipmentSugget = suggetFilter(
                allEquipment,
                exerciseDetails.id
              );

              return {
                exerciseDetails,
                sameTarget: exerciseTargetSugget,
                sameBodyPart: exerciseBodyPartSugget,
                sameEquipement: exerciseEquipmentSugget,
              };
            } catch (error) {
              return error;
            }
          };
          return func();
        },
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
