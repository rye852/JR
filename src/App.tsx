import { NavBar, Footer } from './components';

import { Paper, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    text: {
      primary: string;
      secondary: string;
      link: string;
      nav: string;
      bgColor: string;
      navColor: string;
    };
  }

  export interface ThemeOptions {
    text?: {
      primary?: string;
      secondary?: string;
      link?: string;
      nav?: string;
      bgColor?: string;
      navColor?: string;
    };
  }

  interface TypographyVariants {
    myVar: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    myVar?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    myVar: true;
  }
}

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f00',
      light: '#eee',
      dark: '#111',
    },
  },
});

function App() {
  const [actuelMode, setMode] = useState<'dark' | 'light'>('dark');
  theme = createTheme(
    {
      palette: {
        mode: actuelMode,
      },
      typography: {
        myVar: {
          fontSize: 'clamp(1.25rem, 10vw, 2.5rem)',
          lineHeight: 1.25,
          fontWeight: 500,
        },
      },
    },
    {
      text: {
        primary: theme.palette.mode === 'dark' ? '#fff' : '#111',
        secondary: theme.palette.mode === 'dark' ? '#bf1e2e' : '#d41c2e',
        link: theme.palette.mode === 'dark' ? '#ccc' : 'rgb(68, 8, 8)',
        nav: theme.palette.mode === 'dark' ? '#000' : '#bf1e2e',
        navColor: theme.palette.mode === 'dark' ? '#fff' : '#bf1e2e',
        bgColor: theme.palette.mode === 'dark' ? '#121212' : '#fff',
      },
    }
  );

  const handleToogle = (): void => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        square
        sx={{
          height: '100%',
          minHeight: '100vh',
          width: '100%',
          backgroundColor: theme.text?.bgColor,
        }}>
        <NavBar handleToogle={handleToogle} />
        <Container
          fixed
          maxWidth="xl"
          sx={{ marginTop: { sm: '90px', xs: '80px' }, minHeight: '85vh' }}>
          <Outlet />
        </Container>
        <Footer />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
