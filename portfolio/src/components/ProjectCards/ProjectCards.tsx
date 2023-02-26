import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Link,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import bufferOverflow from "./BufferOverflow.png";
import senateExpenditures from "./SenateExpenditures.png";
import peachGoma1 from "./PeachGoma/SideView.jpg";
import peachGoma2 from "./PeachGoma/TopView.jpg";
import peachGoma3 from "./PeachGoma/Magnets.jpg";

type AssetLink = {
  title: string;
  link: string;
};

type ProjectCard = {
  title: string;
  description: string;
  image?: string;
  link?: string;
  assetLinks?: AssetLink[];
  extraPictures?: string[];
};

const projectCards: ProjectCard[] = [
  {
    title: "Peach and Goma Style Fourier Keyboard Case",
    description:
      'CAD designs for a Keebio Fourier 40% keyboard modeled off of Peach and Goma. \n\n These cases were designed in Autodesk Inventor and support feature a magnetic top frame supported by dovetail sliders. With this, other top frames can be swapped in with ease. This particular keyboard features EBPT Sugarplum keycaps by Cannon Keys. Click "More Details" to see some additional pictures!',
    image: peachGoma1,
    assetLinks: [
      {
        title: "GitHub Repository",
        link: "https://github.com/thechincheachilla/Fourier-Keyboard-Cases",
      },
    ],
    extraPictures: [peachGoma1, peachGoma2, peachGoma3],
  },
  {
    title: "Visualization Animation: One-Byte Buffer Overflows",
    description:
      "An interactive visualization to teach programmers with little experience the concept of one-byte buffer overflows. \n\n This project was created as the final project for UW's CSE 442 Data Visualization course (AU 2021). The project leverages Processing (p5) in Observable to create interactive animation snippets for users to interact with in efforts to explain the process of one-byte buffer exploits to viewers with limited computer science knowledge and relatively little background on computer security. \n\n The project was produced in collaboration with Mahda Soltani and Annie Denton.",
    image: bufferOverflow,
    link: "https://thechincheachilla.github.io/Visualization-One-Byte-Buffer-Overflow/",
    assetLinks: [
      {
        title: "GitHub Repository",
        link: "https://github.com/thechincheachilla/Visualization-One-Byte-Buffer-Overflow",
      },
      {
        title: "Observable: Introductory Exercise - Annie Denton",
        link: "https://observablehq.com/@shashnoot/can-you-find-the-vulnerability",
      },
      {
        title: "Observable: Stack Animation - Mahda Soltani",
        link: "https://observablehq.com/@mahda-soltani/the-stack",
      },
      {
        title: "Observable: Array Allocation Animation - Reiden Chea",
        link: "https://observablehq.com/@thechincheachilla/array-allocation",
      },
      {
        title: "Observable: SHELL Code Animation - Reiden Chea",
        link: "https://observablehq.com/@thechincheachilla/shell-code",
      },
      {
        title: "Observable: Off-By-One Exploit Animation - Reiden Chea",
        link: "https://observablehq.com/@thechincheachilla/the-off-by-one-exploit",
      },
    ],
    extraPictures: [bufferOverflow],
  },
  {
    title: "Visualization: US Senate Expenditures 2000 - 2020",
    description:
      "An interactive visualization to give people a better idea about how much money goes into senatorial campaigns in the USA. \n\n This project was created for UW's CSE 442 Data Visualization course (AU 2021). The interactive visualization aims to allow users to explore senate campaign expenditures by party in the United States from 2000 to 2020. The visualization was created with D3.js in Observable with collaborators Mahda Soltani and Jennifer Fernandez.",
    image: senateExpenditures,
    link: "https://thechincheachilla.github.io/Visualization-Senate-Expenditures-Over-Time/",
    assetLinks: [
      {
        title: "GitHub Repository",
        link: "https://github.com/thechincheachilla/Visualization-Senate-Expenditures-Over-Time",
      },
      {
        title: "Observable",
        link: "https://observablehq.com/@thechincheachilla/amount-spent-on-us-senate-election-campaigns",
      },
    ],
    extraPictures: [senateExpenditures],
  },
];

type ProjectButtonProps = {
  card: ProjectCard;
};

function CardButton({ card }: ProjectButtonProps) {
  return (
    <Button variant="text" href={card.link!} target="_blank">
      <Typography variant="h5" color="primary.dark">
        View Project
      </Typography>
    </Button>
  );
}

type ProjectCardProps = {
  modalOpen: boolean;
  isMobile: boolean;
  maxLines: number;
  modalCardIndex: number;
  onCardClicked: (index: number) => void;
  onModalClose: () => void;
};

export function ProjectCards({
  modalOpen = false,
  isMobile,
  maxLines = 10,
  modalCardIndex,
  onCardClicked,
  onModalClose,
}: ProjectCardProps) {
  const currCard = projectCards[modalCardIndex];

  return (
    <>
      {modalOpen && (
        <Modal open={modalOpen}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              left: "50%",
              position: "absolute",
              top: "15vh",
              width: {
                xs: "100%",
                md: 900,
              },
              maxHeight: "80vh",
              transform: "translateX(-50%)",
            }}
          >
            <Box sx={{ overflow: "auto", px: 4, py: 4 }}>
              <Box
                sx={({ spacing }) => ({
                  position: "absolute",
                  right: spacing(2),
                  top: spacing(2),
                })}
              >
                <IconButton onClick={onModalClose}>
                  <CloseIcon fontSize="large"></CloseIcon>
                </IconButton>
              </Box>
              <Box sx={{ ml: 1 }}>
                <Typography variant="h3" color="primary.dark" mb={2}>
                  {currCard.title}
                </Typography>
                <Typography variant="body1" whiteSpace="pre-line" mb={2}>
                  {currCard.description}
                </Typography>
                {currCard.extraPictures &&
                  currCard.extraPictures.map((pic) => (
                    <Paper sx={{ mb: 4, p: 1 }} elevation={10}>
                      <CardMedia component="img" image={pic} />
                    </Paper>
                  ))}
                <Typography variant="h5">Assets:</Typography>
                {currCard.assetLinks &&
                  currCard.assetLinks.map((link, index) => (
                    <Link key={index} href={link.link}>
                      <Typography mt={1}>{link.title}</Typography>
                    </Link>
                  ))}
              </Box>
            </Box>
          </Paper>
        </Modal>
      )}
      <Stack gap={3} width="80%">
        {projectCards.map((card, index) => (
          <Card key={index} sx={{ display: "flex" }} elevation={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: isMobile ? "100%" : "50%",
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h3" color="primary.dark" mb={2}>
                  {card.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: maxLines,
                    WebkitBoxOrient: "vertical",
                    whiteSpace: "pre-line",
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
              <Box sx={{ ml: 1, mb: 1 }}>
                <Button variant="text" onClick={() => onCardClicked(index)}>
                  <Typography variant="h5">More Details</Typography>
                </Button>
                {card.link && <CardButton card={card} />}
              </Box>
            </Box>
            {!isMobile && (
              <Paper
                sx={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: 350,
                  minWidth: 500,
                }}
                elevation={4}
              >
                <CardMedia component="img" image={card.image} />
              </Paper>
            )}
          </Card>
        ))}
      </Stack>
    </>
  );
}
