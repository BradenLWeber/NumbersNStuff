import { useEffect, useState } from "react";
import { posts } from "../../posts/posts";
import TreeNode from "./tree-node";
import { Box } from "@mui/material";

export class Node {
  constructor(text, expandable) {
    this.nodes = [];
    this.text = text;
    this.expandable = expandable;
    this.expanded = false;
    this.level = 1;
  }
}

const getMonthFromNumber = (num) => {
  num = Number(num);
  switch (num) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
  }
};

const PostTree = (props) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const p = posts;
    const pl = [];

    let date, year, month, monthName, day, yearNodes, monthNodes;
    p.forEach((post) => {
      date = post.createdDate;
      day = date.split("/")[1];
      month = date.split("/")[0];
      monthName = getMonthFromNumber(month);
      year = date.split("/")[2];

      // Add year if it doesn't exist
      if (pl.length === 0 || pl[pl.length - 1].text !== year) {
        pl.push(new Node(year, true));
      }
      yearNodes = pl[pl.length - 1].nodes;

      // Add month if it doesn't exist
      if (
        yearNodes.length === 0 ||
        yearNodes[yearNodes.length - 1].text !== monthName
      ) {
        yearNodes.push(new Node(monthName, true));
      }
      monthNodes = yearNodes[yearNodes.length - 1].nodes;

      // Add post
      monthNodes.push(new Node(`${day}: ${post.title}`, false));
    });

    setPostList(pl);
  }, []);

  return (
    <Box id="post-tree-wrapper" width={300} height="100%" p={10}>
      {postList.map((post) => (
        <TreeNode node={post} key={post.text} level={0}></TreeNode>
      ))}
    </Box>
  );
};

export default PostTree;
