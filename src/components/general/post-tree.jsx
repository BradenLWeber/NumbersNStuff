import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { Color } from 'styles/Color';
import Database from 'utilities/database';
import FilledButton from './filled-button';
import Node from 'classes/node';
import TextInput from './text-input';
import TreeNode from './tree-node';
import { posts } from 'posts/all-posts';

const getMonthFromNumber = (num) => {
  num = Number(num);
  switch (num) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
    default:
      return 'DO NOT RECOGNIZE MONTH';
  }
};

const PostTree = () => {
  const [postList, setPostList] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const p = posts;
    const pl = [];

    let date, year, month, monthName, day, yearNodes, monthNodes;
    p.forEach((post) => {
      date = post.createdDate;
      day = date.split('/')[1];
      month = date.split('/')[0];
      monthName = getMonthFromNumber(month);
      year = date.split('/')[2];

      // Add year if it doesn't exist
      if (pl.length === 0 || pl[pl.length - 1].text !== year) {
        pl.push(new Node(year, true, 1));
      }
      yearNodes = pl[pl.length - 1].nodes;

      // Add month if it doesn't exist
      if (
        yearNodes.length === 0 ||
        yearNodes[yearNodes.length - 1].text !== monthName
      ) {
        yearNodes.push(new Node(monthName, true, 2));
      }
      monthNodes = yearNodes[yearNodes.length - 1].nodes;

      // Add post
      monthNodes.push(new Node(`${day}: ${post.title}`, false, 3));
    });

    setPostList(pl);
  }, []);

  const testDb = () => {
    const db = new Database();
    setTimeout(() => db.getEmailEnabled('armyofbraden@gmail.com'), 3000);
  };

  return (
    <Box
      id='post-tree-wrapper'
      width={300}
      minWidth={300}
      height='100%'
      p={20}
      pt={50}
      boxSizing='border-box'
    >
      <Typography color={Color.gray} mb={5}>
        Blog Archive
      </Typography>
      {postList.map((post) => (
        <TreeNode node={post} key={post.text} level={0} />
      ))}
      <Box mt={40}>
        <TextInput
          value={email}
          onChange={(v) => setEmail(v)}
          placeholder='Email'
          size='small'
          fullWidth={true}
        ></TextInput>
      </Box>
    </Box>
  );
};

export default PostTree;
