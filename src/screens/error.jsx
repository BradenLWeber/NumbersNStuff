import { Box, Typography } from '@mui/material';

import { Color } from 'styles/Color';
import OutlinedButton from 'components/general/outlined-button';
import { useFont } from 'utilities/useFont';
import { useState } from 'react';

const Error = () => {
  const [message, setMessage] = useState(0);

  const font = useFont();

  return (
    <Box display='flex' flexDirection='column' pr={20} pb={100}>
      <Typography mt={50} fontSize={font.title} fontWeight={500}>
        The page you are looking for does not exist.
      </Typography>
      <Typography mt={10} fontSize={font.body}>
        Or else it's doing a really good job hiding.
      </Typography>
      {message < 126 && (
        <OutlinedButton
          sx={{ mt: 50, mb: 20, width: 200, color: Color.green }}
          click={() => setMessage(message + 1)}
        >
          Click me
        </OutlinedButton>
      )}
      {message === 1 && (
        <Typography>You just took orders from a button.</Typography>
      )}
      {message === 2 && <Typography>Click it again.</Typography>}
      {message === 3 && (
        <Typography>
          Now you took orders from text underneath a button.
        </Typography>
      )}
      {message === 4 && (
        <Typography>How do you feel about yourself?</Typography>
      )}
      {message === 5 && (
        <Typography>Read the next message right to left.</Typography>
      )}
      {message === 6 && <Typography>Charm the time's third.</Typography>}
      {message === 7 && (
        <Typography>
          Hey did you notice the word gullible is written in the corner.
        </Typography>
      )}
      {message === 8 && <Typography>Fhelf fowf a fidof fhdhdh.</Typography>}
      {message === 9 && <Typography>I wonder what that meant.</Typography>}
      {message === 10 && <Typography>La de da de da de da.</Typography>}
      {message === 11 && <Typography>Hey want to hear a joke?</Typography>}
      {message === 12 && (
        <Typography>You're still clicking this button.</Typography>
      )}
      {message === 13 && (
        <Typography>
          Let's count how many times you click this button.
        </Typography>
      )}
      {message === 14 && <Typography>Start.</Typography>}
      {message === 15 && (
        <Typography>
          4718563729475829479258692834923570283402873502856028346208374023
        </Typography>
      )}
      {message === 16 && (
        <Typography>
          JK, that's the number of times I think you'll click this button before
          you get too bored to continue.
        </Typography>
      )}
      {message === 17 && <Typography>Do you have homework to do?</Typography>}
      {message === 18 && <Typography>Maybe a kid or something?</Typography>}
      {message === 19 && (
        <Typography>
          Here, click on this{' '}
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>
            link
          </a>{' '}
          to understand the meaning of life.
        </Typography>
      )}
      {message === 20 && (
        <Typography>
          Seriously,{' '}
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>
            click it.
          </a>
        </Typography>
      )}
      {message === 21 && <Typography>HAHAHAHA you're so gullible.</Typography>}
      {message === 22 && <Typography>Never gets old.</Typography>}
      {message === 23 && <Typography>Let's play a game.</Typography>}
      {message > 23 && message < 101 && message !== 79 && (
        <Typography>You keep clicking this button and I'll watch.</Typography>
      )}
      {message === 79 && <Typography>Spongebob</Typography>}
      {message > 100 && message < 105 && (
        <Typography>Okay, okay, you can stop.</Typography>
      )}
      {message === 106 && (
        <Typography>This message will terminate in 5 seconds.</Typography>
      )}
      {message === 107 && <Typography>5</Typography>}
      {message === 108 && <Typography>4</Typography>}
      {message === 109 && <Typography>3</Typography>}
      {message === 110 && <Typography>2</Typography>}
      {message === 111 && <Typography>1</Typography>}
    </Box>
  );
};

export default Error;
