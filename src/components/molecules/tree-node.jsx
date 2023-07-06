import { Box, ButtonBase, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PropTypes from "prop-types";
import { useState } from "react";
import { Color } from "../../styles/Color";

const TreeNode = (props) => {
  const { level } = props; // node is also in props but is not getting etracted due to naming conflicts
  const [node, setNode] = useState(props.node);

  const clickIcon = () => {
    setNode((prevNode) => ({
      ...prevNode,
      expanded: !prevNode.expanded,
    }));
  };

  return (
    <>
      <Box display={"flex"} flexDirection={"row"} pl={level * 15} mb={3}>
        {node.expandable && (
          <ButtonBase onClick={clickIcon} sx={{ borderRadius: 5 }}>
            {node.expanded ? (
              <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            ) : (
              <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
            )}
          </ButtonBase>
        )}
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": { color: node.expandable ? "inherit" : Color.secondary },
          }}
          onClick={clickIcon}
        >
          {node.text}
        </Typography>
      </Box>
      {node.nodes.length > 0 &&
        node.expanded &&
        node.nodes.map((n) => (
          <TreeNode node={n} id={n.text} level={level + 1}></TreeNode>
        ))}
    </>
  );
};

TreeNode.propTypes = {
  node: PropTypes.instanceOf(Node),
};

export default TreeNode;
