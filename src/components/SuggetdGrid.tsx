import {
  CardMedia,
  Typography,
  useTheme,
  Grid,
  Button,
  Card,
} from '@mui/material';
import { ExerciseType } from './ExercisesCard';
import { Link } from 'react-router-dom';
type SuggetdGridProps = {
  handleClick: () => void;
  suggeted: 'target' | 'bodyPart' | 'equipment';
  title: string;
  sameSuggeted: ExerciseType[];
  nameOfSuggeted: string;
};

const SuggetdGrid = ({
  suggeted,
  title,
  handleClick,
  sameSuggeted,
  nameOfSuggeted,
}: SuggetdGridProps) => {
  const theme = useTheme();
  return (
    <Grid
      spacing={2}
      direction={'row'}
      columns={12}
      sx={{ maxWidth: '100%', marginY: '20px' }}
      container>
      <Grid item xs={12}>
        <Typography
          sx={{ margin: 'auto', textAlign: { xs: 'center', sm: 'start' } }}
          color={theme.text.primary}
          variant="h5">
          {title}{' '}
          <Typography component={'span'} variant="h5">
            <Link onClick={handleClick} to={`/list/${suggeted}`}>
              <Button sx={{ color: theme.text.secondary, fontSize: 'inherit' }}>
                {nameOfSuggeted}
              </Button>
            </Link>
          </Typography>
        </Typography>
      </Grid>
      {sameSuggeted.length === 0 ? (
        <Typography
          variant="h5"
          component={'p'}
          color={theme.text.primary}
          margin={'10px auto'}
          textAlign={'center'}>
          There Is Any Exercise To Show
        </Typography>
      ) : (
        sameSuggeted.map((exercise) => (
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <Link
                onClick={handleClick}
                to={`/exerciseDetails/${exercise.id}`}>
                <CardMedia
                  image={exercise.gifUrl}
                  sx={{
                    width: '100%',
                    height: '200px',
                    borderRadius: '4px',
                  }}
                />
              </Link>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default SuggetdGrid;
