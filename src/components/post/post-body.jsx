import { Typography } from "@mui/material";
import { Font } from "../../styles/Font";

const Body = (props) => {
  const { children } = props;

  return (
    <Typography fontSize={Font.size.body} marginBottom={10}>
      {children}
    </Typography>
  );
};

export default Body;
