import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Bounties with most EV" subtitle="Top 3 Bounties by no. of EVs of different Manufacturers" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;