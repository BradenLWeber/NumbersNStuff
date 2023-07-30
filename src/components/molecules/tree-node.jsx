import { Box, ButtonBase, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Color } from 'styles/Color';
import { Link, useLocation } from 'react-router-dom';
import { parseTitleToUrl } from 'utilities/functions';
import Node from 'classes/node';

const TreeNode = (props) => {
  const { level } = props; // node is also in props but is not getting etracted due to naming conflicts
  const [node, setNode] = useState(props.node);
  const [url, setUrl] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setUrl(
      node.expandable
        ? location.pathname
        : '/post/' + parseTitleToUrl(node.text.toLowerCase().split(': ')[1]),
    );
  }, [location]);

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
                color: node.expandable ? Color.gray : Color.secondary,
              },
            }}
            onClick={clickIcon}
          >
            {node.text}
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
