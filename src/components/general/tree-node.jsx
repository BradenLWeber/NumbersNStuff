import { Box, ButtonBase, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { getChildNodeNames, parseTitleToUrl } from 'utilities/functions';
import { useEffect, useState } from 'react';

import { Color } from 'styles/Color';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Node from 'classes/node';
import PropTypes from 'prop-types';

const TreeNode = (props) => {
  const { level } = props; // node is also in props but is not getting etracted due to naming conflicts
  const [node, setNode] = useState(props.node);
  const [url, setUrl] = useState('/');
  const location = useLocation();

  useEffect(() => {
    const url = location.pathname;
    const urlItems = url.split('/');
    setUrl(
      node.expandable
        ? url
        : '/post/' + parseTitleToUrl(node.text.toLowerCase().split(': ')[1]),
    );
    if (url.includes('/post/')) {
      const childNodes = getChildNodeNames(node.level, node.text, node.nodes);
      const shouldBeExpanded = childNodes
        .map((text) => parseTitleToUrl(text))
        .includes(urlItems[urlItems.length - 1]);
      node.expanded = shouldBeExpanded;
    }
  }, [location.pathname]);

  const clickIcon = () => {
    setNode((prevNode) => ({
      ...prevNode,
      expanded: !prevNode.expanded,
    }));
  };

  return (
    <>
      <Box display='flex' flexDirection='row' pl={level * 15} mb={3}>
        {node.expandable && (
          <ButtonBase onClick={clickIcon} sx={{ borderRadius: 5 }}>
            {node.expanded ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ButtonBase>
        )}
        <Link to={url} style={{ color: 'unset', textDecoration: 'none' }}>
          <Typography
            sx={{
              cursor: 'pointer',
              color: node.expandable ? Color.black : Color.gray,
              '&:hover': {
                color: node.expandable ? Color.gray : Color.secondaryDark,
              },
            }}
            onClick={clickIcon}
          >
            {node.text.includes(':') ? (
              <span>
                <b>{node.text.split(':')[0]}</b>:{node.text.split(':')[1]}
              </span>
            ) : (
              node.text
            )}
          </Typography>
        </Link>
      </Box>
      {node.nodes.length > 0 &&
        node.expanded &&
        node.nodes.map((n) => (
          <TreeNode node={n} key={n.text} level={level + 1} />
        ))}
    </>
  );
};

TreeNode.propTypes = {
  node: PropTypes.instanceOf(Node),
  level: PropTypes.number,
};

export default TreeNode;
