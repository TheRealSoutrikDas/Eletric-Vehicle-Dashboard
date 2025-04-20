import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Yearly Sales by Top Manufacturers" subtitle="2017-2024" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;