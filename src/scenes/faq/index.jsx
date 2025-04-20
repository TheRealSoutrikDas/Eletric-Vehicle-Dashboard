import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is this Dashboard for?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This Dashboard is for the visualization of Electric_Vehicle_Population_Data dataset. link: https://www.kaggle.com/datasets/willianoliveiragibin/electric-vehicle-population/data
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the purpose of this dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This dashboard provides real-time insights into electric vehicle (EV) data — including performance metrics, charging trends, and geographical distributions — all in one interactive interface.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I customize the dashboard view?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Currently, the dashboard layout is fixed. However, future updates may allow users to personalize themes, select specific metrics to display, and choose between light/dark modes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is this dashboard mobile-friendly?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The dashboard is optimized for desktop and larger screens for best visibility and interaction. A mobile-responsive version is in the pipeline for future releases.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is anyone even gonna read through all of this?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Probably No, buit it was a fun experience.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;