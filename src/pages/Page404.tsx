import { Typography, useTheme, Button } from '@mui/material';
import { useNavigate, useRouteError } from 'react-router-dom';

const Page404 = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const error = useRouteError() as { message: string };
  return (
    <Typography textAlign={'center'} color={'error'}>
      <Typography margin={'20px'} variant="h3">
        Oooh we Got A Probleme !
      </Typography>
      <Typography margin={'20px'} color={theme.text.primary} variant="h6">
        {error?.message ||
          'This Page is not Found. (Cheek If Your Link is Correct)'}
      </Typography>
      <Button
        variant="outlined"
        onClick={() => navigate(-1)}
        sx={{
          color: theme.text.primary,
          margin: '10px',
          fontSize: '1.2em',
        }}>
        Go Back
      </Button>
      <Button
        variant="outlined"
        onClick={() => navigate('/')}
        sx={{
          color: theme.text.primary,
          margin: '10px',
          fontSize: '1.2em',
        }}>
        Home Page
      </Button>
    </Typography>
  );
};

export default Page404;
