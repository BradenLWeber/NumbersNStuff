import { Typography } from "@mui/material";
import { Font } from "../../styles/Font";

const Title = (props) => {
  const { children } = props;

  return (
    <Typography fontSize={Font.size.title} marginY={10}>
      {children}
    </Typography>
  );
};

export default Title;
