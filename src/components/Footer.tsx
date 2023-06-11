import { Box, Typography, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  const date: Date = new Date();
  return (
    <Box
      sx={{ background: theme.text.nav }}
      marginTop={'20px'}
      width={'100%'}
      padding={'20px'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}>
      <Typography textAlign={'center'} variant="h6" color={'#fff'}>
        Designed & Coded By{' '}
        <Typography component={'span'} variant="h6">
          JORYE <Typography component={'p'} variant='subtitle1'>{date.getFullYear()}</Typography>
        </Typography>
      </Typography>
    </Box>
  );
};

export default Footer;
