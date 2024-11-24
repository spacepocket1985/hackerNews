import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';

export const Spoiler: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography variant='subtitle2'>View attached comments</Typography>
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);
