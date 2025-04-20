import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { carSales } from "../../data/mockData";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import PieChart from "../../components/PieChart";
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import ElectricCarOutlinedIcon from '@mui/icons-material/ElectricCarOutlined';
import Battery4BarOutlinedIcon from '@mui/icons-material/Battery4BarOutlined';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your EV dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="16791"
            subtitle="EVs sold in 2023"
            progress="0.68"
            increase="+114.91%"
            icon={
              <ShoppingCartOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="8194"
            subtitle="Top Manufacturer(2023): TESLA"
            progress="0.66"
            increase="+93.43%"
            icon={
              <FactoryOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="5446"
            subtitle="Top Model(2023): Model Y"
            progress="0.32"
            increase="32.43%"
            icon={
              <ElectricCarOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="39461"
            subtitle="Battery Electric Vehicle"
            progress="0.789"
            increase="78.92%"
            icon={
              <Battery4BarOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Bounty with Most EVs:  King, Washington
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                37502
              </Typography>
            </Box>
            <Box>
              <IconButton component={Link} to="/line">
                <ArrowOutwardOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Top Cities
            </Typography>
          </Box>
          {carSales.map((carModel, i) => (
            <Box
              key={`${carModel.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {carModel.city}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {/* Are you really going through the code ToT */}
                </Typography>
              </Box>
              {/* Do you like this code :) */}
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {carModel.number} units
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="top"
            mb="0px"
          >
            <Typography variant="h5" fontWeight="600">
              Top Manufacturers
            </Typography>
            <IconButton component={Link} to="/pie">
              <ArrowOutwardOutlinedIcon
                sx={{ fontSize: "20px", color: colors.greenAccent[500] }}
              />
            </IconButton>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box height="300px" width="300px">
              <PieChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="top"
            px="30px"
            pt="30px"
          >
            <Typography variant="h5" fontWeight="600">
              Yearly Sales
            </Typography>
            <IconButton component={Link} to="/bar">
              <ArrowOutwardOutlinedIcon
                sx={{ fontSize: "20px", color: colors.greenAccent[500] }}
              />
            </IconButton>
          </Box>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="top"
            mb="15px"
          >
            <Typography variant="h5" fontWeight="600">
              Geography Based Sales
            </Typography>
            <IconButton component={Link} to="/geography">
              <ArrowOutwardOutlinedIcon
                sx={{ fontSize: "20px", color: colors.greenAccent[500] }}
              />
            </IconButton>
          </Box>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;