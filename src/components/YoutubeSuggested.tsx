import { CardMedia, Typography, useTheme, Grid, Card } from '@mui/material';
import { itemsFromYoutube } from './DetailsBody';

type YoutubeSuggestedProp = {
  items: itemsFromYoutube;
};

const YoutubeSuggested = ({ items }: YoutubeSuggestedProp) => {
  const theme = useTheme();
  return (
    <Grid
      spacing={2}
      direction={'row'}
      columns={12}
      sx={{ maxWidth: '100%', marginY: '20px', minHeight: '250px' }}
      container>
      <Grid item xs={12}>
        <Typography
          sx={{ margin: 'auto', textAlign: { xs: 'center', sm: 'start' } }}
          color={theme.text.primary}
          variant="h5">
          Tuto From{' '}
          <Typography
            sx={{ color: theme.text.secondary, fontSize: 'inherit' }}
            component={'span'}
            variant="h5">
            YouTube
          </Typography>
        </Typography>
      </Grid>
      {items?.map(({ thumbnails, url }) => (
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <a target="_blank" href={url}>
              <CardMedia
                image={thumbnails[0]?.url}
                sx={{
                  width: '100%',
                  height: '200px',
                  borderRadius: '4px',
                }}
              />
            </a>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default YoutubeSuggested;
