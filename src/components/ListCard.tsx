import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

type listCardProps = {
  name: string;
  type: 'bodyPart' | 'target' | 'equipment';
  imgUrl: string;
  handleClick: () => void;
};
const ListCard = ({ name, imgUrl, type, handleClick }: listCardProps) => {
  const theme = useTheme();
  return (
    <Grid sx={{ margin: 'auto' }} xs={12} sm={6} item>
      <Card sx={{ maxWidth: 345, margin: 'auto', textAlign: 'center' }}>
        <CardMedia component="img" alt={name} height="280" image={imgUrl} />
        <CardContent>
          <Typography variant="h4" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            onClick={() => handleClick()}
            style={{ margin: 'auto' }}
            to={`/exercises/${type}/${name}`}>
            <Button
              sx={{
                margin: 'auto',
                color: theme.text.secondary,
                fontSize: '1rem',
              }}>
              Show Exercises
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ListCard;
