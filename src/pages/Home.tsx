import { HomeGrid } from '../components';
import landing from '../assets/landing.jpg';
import Equipement from '../assets/Equipement.jpg';
import bodyPart from '../assets/bodyParts.jpg';
import muscleTarget from '../assets/muscleTarget.jpg';

import { Box } from '@mui/material';
import { HomeGridProp } from '../components/HomeGrid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState, inLoad, outLoad } from '../store';
type sectionsType = HomeGridProp[];

const sections: sectionsType = [
  {
    title: `It's Your Time`,
    description: `Welcome to JR-Fitness, your premier destination for achieving your
  fitness goals and leading a healthier lifestyle. At JR-Fitness, we
  believe that fitness is not just a hobby but a way of life. Our
  state-of-the-art facilities, expert trainers, and wide range of
  classes and programs are designed to inspire and empower you to reach
  your full potential. Whether you're a beginner taking your first steps
  towards fitness or an experienced athlete looking for new challenges,
  we have something for everyone. Join our vibrant community of
  like-minded individuals who are passionate about their well-being.
  Take control of your health and transform your body at JR-Fitness -
  where fitness meets excellence.`,
    imageUrl: [landing],
    direction: 'row',
    hasButton: false,
    hasSlider: false,
    marginBottom: true,
  },
  {
    title: `List Of Body Parts`,
    description: `Training by body part refers to a workout approach where each session focuses on 
    specific muscle groups or body regions. This type of training allows individuals to target and
    prioritize the development of specific areas of their physique.
    Training by body part can be beneficial for individuals aiming to improve muscle symmetry, 
    address muscle imbalances, or enhance the overall aesthetic appearance of their physique. 
    It allows for targeted training of specific muscles, ensuring they receive adequate stimulation 
    and progressive overload for growth and strength development 
    However, it's important to note that training by body part is just one approach among many in the 
    realm of fitness. Other training methods, such as full-body workouts or functional training, can also 
    provide numerous benefits. The choice of training approach depends on individual goals, preferences, 
    and overall fitness levels. It's often helpful to consult with a fitness professional to design a training 
    program tailored to specific needs.`,
    imageUrl: [bodyPart],
    direction: 'row-reverse',
    hasButton: true,
    hasSlider: true,
    marginBottom: true,
    linkTo: 'list/bodyPart',
  },
  {
    title: `List Of Muscle To Trgets`,
    description: `Training by muscle target is a strategic workout approach that involves concentrating on 
    individual muscles during training sessions. Instead of working entire body parts, such as the chest or back,
    this method hones in on specific muscles within those regions. By isolating these muscles, individuals can 
    give them dedicated attention and stimulation for optimal development.
    This approach allows for a more targeted and focused training stimulus, as each exercise and technique is 
    carefully chosen to engage and challenge the specific muscle being targeted. It enables individuals to 
    address specific weaknesses or imbalances in their physique, enhancing muscle symmetry and overall aesthetics.
    Training by muscle target is commonly employed by bodybuilders, physique competitors, and those seeking
    aesthetic enhancements. It enables them to prioritize the development of specific muscles to create a 
    well-defined and proportionate physique. Additionally, this approach can be beneficial for athletes in 
    certain sports that require specific muscle groups to be strong and functional.
    `,
    imageUrl: [muscleTarget],
    direction: 'row',
    hasButton: true,
    hasSlider: true,
    marginBottom: true,
    linkTo: 'list/target',
  },
  {
    title: `List Of Equipments`,
    description: `Gym equipment consists of various machines, devices, and tools designed for exercise and fitness
    purposes. These equipment options are commonly found in fitness facilities and cater to different workout 
    needs and goals. They provide opportunities for strength training, cardiovascular exercise, flexibility 
    training, and overall physical fitness improvement. Gym equipment is designed to provide resistance, support 
    proper form, and enhance the effectiveness of workouts. Users can adjust settings, weights, and resistance 
    levels to meet their individual needs and fitness levels. Whether it's machines, free weights, resistance 
    bands, or specialized equipment, each type serves a specific purpose in helping individuals achieve their 
    fitness goals.
    `,
    imageUrl: [Equipement],
    direction: 'row-reverse',
    hasButton: true,
    hasSlider: true,
    marginBottom: true,
    linkTo: 'list/equipment',
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((stor: RootState) => stor.loading);
  const handleClick = () => {
    return dispatch(inLoad());
  };

  useEffect(() => {
    dispatch(outLoad());
  }, [dispatch]);
  return (
    <Box>
      {isLoading ? (
        <div className="center">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      ) : (
        sections.map((section, sectionIndex) => (
          <HomeGrid
            handleClick={handleClick}
            description={section.description}
            imageUrl={section.imageUrl}
            title={section.title}
            key={section.title}
            direction={section.direction}
            hasButton={section.hasButton}
            hasSlider={section.hasSlider}
            marginBottom={sectionIndex !== sections.length - 1}
            linkTo={section.linkTo}
          />
        ))
      )}
    </Box>
  );
};

export default Home;
