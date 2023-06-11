import { ExerciseDetailsType } from '../pages/ExerciseDetails';
import { Box, CardMedia, Typography, useTheme, Card } from '@mui/material';
import { SuggetdGrid, YoutubeSuggested } from './';
import { useState, useEffect } from 'react';
import { searchFetch } from '../helpers/serachAPI';

export type itemsFromYoutube = {
  url: string;
  thumbnails: {
    url: string;
  }[];
}[];

const DetailsBody = ({
  exerciseDetails,
  sameBodyPart,
  sameEquipement,
  sameTarget,
  handleClick,
}: ExerciseDetailsType & { handleClick: () => void }) => {
  const [vediosFromYoutube, setVediosFromYoutube] = useState<itemsFromYoutube>(
    [] as itemsFromYoutube
  );
  useEffect(() => {
    const fetchYouTube = async () => {
      const data = await searchFetch(exerciseDetails?.name);
      setVediosFromYoutube(data.items.slice(0, 4));
    };
    fetchYouTube();
  }, [exerciseDetails]);

  const theme = useTheme();
  return (
    <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
      <Card
        sx={{
          maxWidth: '100%',
          width: '400px',
          aspectRatio: '1/1',
          borderRadius: '16px 2px ',
        }}>
        <CardMedia
          image={exerciseDetails.gifUrl}
          component={'img'}
          sx={{
            maxWidth: '100%',
            width: '400px',
            height: '100%',
            borderRadius: '16px 2px ',
          }}
        />
      </Card>
      <Typography color={theme.text.secondary} marginY={'32px'} variant="myVar">
        {exerciseDetails.name}
      </Typography>
      <SuggetdGrid
        nameOfSuggeted={exerciseDetails.bodyPart}
        handleClick={handleClick}
        sameSuggeted={sameBodyPart}
        suggeted="bodyPart"
        title="Exercises Target Same Body Part"
      />
      <SuggetdGrid
        nameOfSuggeted={exerciseDetails.target}
        handleClick={handleClick}
        sameSuggeted={sameTarget}
        suggeted="target"
        title="Exercises Target Same Muscle"
      />
      <SuggetdGrid
        nameOfSuggeted={exerciseDetails.equipment}
        handleClick={handleClick}
        sameSuggeted={sameEquipement}
        suggeted="equipment"
        title="Exercises Withe Same Equipment"
      />
      <YoutubeSuggested items={vediosFromYoutube} />
    </Box>
  );
};

export default DetailsBody;
