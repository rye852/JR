import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';

export type ExerciseType = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

type ExercisesCardProps = {
  exercise: ExerciseType;
  handleClick: () => void;
};

const ExercisesCard = ({ exercise, handleClick }: ExercisesCardProps) => {
  const theme = useTheme();
  return (
    <Grid sx={{ margin: 'auto' }} xs={12} sm={6} item>
      <Card sx={{ maxWidth: 345, margin: 'auto', textAlign: 'center' }}>
        <CardMedia
          component="img"
          alt="Loading..."
          height="280"
          image={exercise.gifUrl}
        />
        <CardContent>
          <Typography variant="h4" component="div">
            {exercise.name}
          </Typography>
        </CardContent>
        <CardContent>
          <Link
            style={{ textDecoration: 'none' }}
            to={`/exercises/bodyPart/${exercise.bodyPart}`}>
            <Typography
              textAlign={'start'}
              color={theme.text.primary}
              variant="subtitle1">
              body Part:{' '}
              <Typography
                color={theme.text.secondary}
                component={'span'}
                variant="h6">
                {exercise.bodyPart}
              </Typography>
            </Typography>
          </Link>
          <Link
            onClick={() => handleClick()}
            style={{ textDecoration: 'none' }}
            to={`/exercises/target/${exercise.target}`}>
            <Typography
              textAlign={'start'}
              color={theme.text.primary}
              variant="subtitle1">
              Target Muscle:{' '}
              <Typography
                color={theme.text.secondary}
                component={'span'}
                variant="h6">
                {exercise.target}
              </Typography>
            </Typography>
          </Link>
          <Link
            onClick={() => handleClick()}
            style={{ textDecoration: 'none' }}
            to={`/exercises/equipment/${exercise.equipment}`}>
            <Typography
              textAlign={'start'}
              color={theme.text.primary}
              variant="subtitle1">
              Equipment:{' '}
              <Typography
                color={theme.text.secondary}
                component={'span'}
                variant="h6">
                {exercise.equipment}
              </Typography>
            </Typography>
          </Link>
        </CardContent>
        <CardActions>
          <Link
            onClick={() => handleClick()}
            style={{ margin: 'auto' }}
            to={`/exerciseDetails/${exercise.id}`}>
            <Button
              sx={{
                margin: 'auto',
                color: theme.text.secondary,
                fontSize: '1rem',
              }}>
              Exercise Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ExercisesCard;
