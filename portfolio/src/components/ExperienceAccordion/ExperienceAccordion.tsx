import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AssignmentIcon from '@mui/icons-material/Assignment' 
import { Document, Page, pdfjs } from 'react-pdf'
import { useState } from 'react'

export function ExperienceAccordion() {
    
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }: any) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    return (
        <Box sx={{ width: "75%"}}>
            <Accordion>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="exp1-content"
                    id="exp1-header"
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <AssignmentIcon fontSize="large" sx={{mr: 3}}/>
                        <Typography variant="h3" color="primary" mr={3}>Current Resume</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Document
                        file={require(".//Resume.pdf")}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}