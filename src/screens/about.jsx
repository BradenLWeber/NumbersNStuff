import { Box } from '@mui/material';
import Title from 'components/post/post-title';
import Body from 'components/post/post-body';
import ChalkBrain from 'assets/global/ChalkBrain.png';

const About = () => {
  return (
    <Box display='flex' flexDirection='row'>
      <Box
        id='about-wrapper'
        width='100%'
        height='100%'
        p={30}
        display='flex'
        flexDirection='row'
      >
        <Box flex={1} minWidth={0} mr={50}>
          <Title>Welcome!</Title>
          <Body>
            I am just a friendly, neighborhood mathematician. I do math because
            I enjoy it, though I only sometimes understand it. I am not
            decorated educationally, but I can't shake my drive to discover new
            mathematical concepts.
          </Body>
          <Body>
            This blog started to solve a simple problem. All my math adventures
            were contained inside my head and hardly anywhere else. I want other
            people to experience the wonder of math too! I can't do that if I
            keep it all to myself, so this is my attempt to get everything into
            a public space.
          </Body>
          <Title>Contact Me</Title>
          <Body>bradenlweber@gmail.com</Body>
        </Box>
        <img
          alt='Chalk drawing of a brain'
          src={ChalkBrain}
          width={400}
          height={350}
        />
      </Box>
    </Box>
  );
};

export default About;
