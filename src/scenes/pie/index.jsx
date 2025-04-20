import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Top EV Manufacturers" subtitle="All time top EV Manufacturers" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;