import { Avatar, Box, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StoreIcon from "@mui/icons-material/Store";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "@mui/material/Link";

type ProfileProps = {
  isMobile: boolean;
};

export function Profile({ isMobile }: ProfileProps) {
  const mailLink = "mailto:reiden.chea@gmail.com";
  const githubLink = "https://github.com/thechincheachilla";
  const linkedInLink = "https://www.linkedin.com/in/reiden-chea/";
  const etsyLink = "https://www.etsy.com/shop/3DModdedPuzzles";
  const youtubeLink =
    "https://www.youtube.com/channel/UCPXfeAd7JaN-0VPBYw4yzJA";
  const profileText =
    "I am a Software Engineer 1 for SeekOut and a Masters student at Georgia Tech pursuing a Master's in Computer Science with a specialization in Machine Learning. I received a B.S. in Computer Science from the University of Washington - Seattle and graduated Cum Laude. I am a full stack engineer, but specialize in the backend and API integration. In my free time, I like to study other languages (日本語 and Spanish), play Pokemon, and powerlift.";
  const quote = '"Your First Design Always Sucks" — James Wilson';

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {isMobile && (
        <Stack direction="row" gap={1} mb={2}>
          <Typography variant="h1" fontWeight={800}>
            Reiden
          </Typography>
          <Typography variant="h1" color="primary.dark" fontWeight={800}>
            Chea
          </Typography>
        </Stack>
      )}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {!isMobile && (
          <Stack direction="column" gap={2} mr={5} maxWidth="40%">
            <Stack direction="row" gap={1}>
              <Typography variant="h1" fontWeight={800}>
                Reiden
              </Typography>
              <Typography variant="h1" color="primary.dark" fontWeight={800}>
                Chea
              </Typography>
            </Stack>
            <Typography variant="body1" color="primary.dark">
              {profileText}
            </Typography>
          </Stack>
        )}
        <Avatar
          sx={{ width: 250, height: 250 }}
          src={"assets/Profile/Profile.jpg"}
        />
      </Box>
      <Stack direction="row" gap={2} mb={5} mt={2}>
        <Link href={mailLink} target="_blank">
          <EmailIcon fontSize="large" />
        </Link>
        <Link href={githubLink} target="_blank">
          <GitHubIcon fontSize="large" />
        </Link>
        <Link href={linkedInLink} target="_blank">
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link href={etsyLink} target="_blank">
          <StoreIcon fontSize="large" />
        </Link>
        <Link href={youtubeLink} target="_blank">
          <YouTubeIcon fontSize="large" />
        </Link>
      </Stack>
      <Typography variant="h3" textAlign="center">
        {quote}
      </Typography>
    </Box>
  );
}
