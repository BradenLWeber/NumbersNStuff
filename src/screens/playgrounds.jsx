import { Box, MenuItem, TextField } from '@mui/material';

import PlaygroundCard from 'components/general/playground-card';
import TextInput from 'components/general/text-input';
import _ from 'lodash';
import { playgrounds } from 'playgrounds/all-playgrounds';
import { useState } from 'react';

const Playgrounds = () => {
  const [filter, setFilter] = useState('');
  const [allPlaygrounds, setAllPlaygrounds] = useState(
    [...playgrounds].reverse(),
  );
  const [playgroundList, setPlaygroundList] = useState(
    [...playgrounds].reverse(),
  );
  const [filterBy, setFilterBy] = useState('Newest first');

  const updateFilter = (val) => {
    const value = val.toLowerCase();
    setPlaygroundList(
      allPlaygrounds.filter((p) => p.title.toLowerCase().includes(value)),
    );
    setFilter(value);
  };

  const updateFilterBy = (value) => {
    const direction = value === 'Newest first' ? -1 : 1;

    setAllPlaygrounds(
      _.orderBy(
        allPlaygrounds,
        (item) => new Date(item.createdDate).getTime() * direction,
      ),
    );

    setPlaygroundList(
      _.orderBy(
        playgroundList,
        (item) => new Date(item.createdDate).getTime() * direction,
      ),
    );
    setFilterBy(value);
  };

  return (
    <Box display='flex' flexDirection='row' width='100%'>
      <Box
        id='playgrounds-wrapper'
        width='100%'
        height='100%'
        p={30}
        maxWidth='100vw'
        boxSizing='border-box'
        display='inline-block'
      >
        <Box
          width='100%'
          maxWidth={1000}
          display='flex'
          flexDirection='row'
          mb={28}
        >
          <TextInput
            variant='standard'
            label='Filter'
            sx={{ flex: 1, minWidth: 0, mt: 8 }}
            backgroundColor='inherit'
            value={filter}
            onChange={(v) => updateFilter(v)}
          />
          <TextInput
            select
            label='filter by'
            value={filterBy}
            onChange={(v) => updateFilterBy(v)}
            sx={{ width: 220, ml: 30 }}
          >
            <MenuItem value='Newest first'>Newest first</MenuItem>
            <MenuItem value='Oldest first'>Oldest first</MenuItem>
          </TextInput>
        </Box>
        <Box
          id='playground-list-wrapper'
          width='100%'
          display='flex'
          flexDirection='row'
          flexWrap='wrap'
          columnGap={10}
        >
          {playgroundList.map((playground) => (
            <PlaygroundCard
              title={playground.title}
              image={playground.image}
              key={playground.title}
              mb={10}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Playgrounds;
