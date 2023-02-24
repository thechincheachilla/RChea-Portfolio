import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AssignmentIcon from "@mui/icons-material/Assignment";
import IFrame from "react-iframe";

export function ExperienceAccordion() {
  return (
    <Box sx={{ width: "75%" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="exp1-content"
          id="exp1-header"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <AssignmentIcon fontSize="large" sx={{ mr: 3 }} />
            <Typography variant="h3" color="primary" mr={3}>
              Current Resume
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <IFrame
            url={require(".//Resume.pdf")}
            width="100%"
            styles={{ minHeight: window.innerHeight }}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
