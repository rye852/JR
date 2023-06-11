import { Grid, Typography, CardMedia, Button } from '@mui/material';
import { useTheme, ThemeOptions } from '@mui/material';
import { Link } from 'react-router-dom';
export type HomeGridProp = {
  title: string;
  description: string;
  imageUrl: string[];
  direction: 'row' | 'row-reverse';
  hasButton: boolean;
  hasSlider: boolean;
  marginBottom: boolean;
  linkTo?: string;
};

const HomeGrid = ({
  title,
  description,
  imageUrl,
  direction,
  marginBottom,
  hasButton,
  linkTo,
  handleClick,

}: HomeGridProp & { handleClick: () => void; }) => {
  const { text }: ThemeOptions = useTheme();
  return (
    <Grid
      sx={{ marginBottom: marginBottom ? '100px' : 'auto' }}
      container
      direction={direction}
      columns={6}
      spacing={2}>
      <Grid item sm={2} display={{ md: 'block', xs: 'none' }}>
        <CardMedia
          image={imageUrl[0]}
          component={'img'}
          alt="someOne wann change"
          sx={{ width: '100%', height: '100%', borderRadius: '20px 0 ' }}
        />
      </Grid>
      <Grid
        sx={{
          marginX: 'auto',
          padding: { xs: '0', md: 'auto' },
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        item
        sm={6}
        md={4}>
        <Typography
          color={text?.secondary}
          textAlign={'center'}
          component="h2"
          variant={'myVar'}>
          {title}
        </Typography>
        <Typography
          sx={{ textAlign: { md: 'start', xs: 'center' } }}
          maxWidth={'700px'}
          component={'p'}
          variant="h5">
          {description}
        </Typography>
        {hasButton && (
          <Link onClick={() => handleClick()} to={linkTo || ''}>
            <Button
              sx={{
                marginTop: '25px',
                fontSize: '1.5rem',
                borderRadius: '8px',
                color: text?.secondary,
              }}>
              Show All
            </Button>
          </Link>
        )}
      </Grid>
    </Grid>
  );
};

export default HomeGrid;
