import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import seekoutLogo from "./seekout.jpg";
import gatechSeal from "./gatechSeal.png";
import uwSeal from "./uwSeal.png";
import uwCseLogo from "./uwCseLogo.jpg";

type ExperienceDetails = {
  date?: string;
  title?: string;
  location?: string;
  description?: string;
  logo?: string;
};

const experiences: ExperienceDetails[] = [
  {
    date: "5.16.22 ~ Present",
    title: "SeekOut — SWE1",
    location: "Bellevue, Washington",
    description:
      "I started my first role as a Full Stack Software Engineer 1 at SeekOut. I am on the Grow team where my work focuses on the development of the Career Compass application. I work across the stack, specializing in backend API endpoint integration and architecture while producing front end UI component deliverables.",
    logo: seekoutLogo,
  },
  {
    date: "8.22.22 ~ Present",
    title: "Georgia Tech — Master's Student",
    location: "Atlanta, Georgia (Remote)",
    description:
      "I started as a Master's student in GaTech's OMSCS program to pursue an M.S. in Computer science with a specialization in Machine Learning. So far, I have taken Bayesian Statistics and am currently enrolled in Machine Learning for Trading. I intend to finish by 2025.",
    logo: gatechSeal,
  },
  {
    date: "9.28.19 ~ 3.18.22",
    title: "University of Washington — Undergraduate Student",
    location: "Seattle, Washington",
    description:
      "After two years and two quarters, I graduated from the University of Washington - Seattle, Cum Laude, with a B.S. in Computer Science (Data Science option). I focused on data science and machine learning CS courses such as AI, ML, Intro to Algorithms, and Computational Biology, and Databases. In addition, to increase my bilingual proficiency, I completed up to Spanish 203. At UW, I was a research assistant at the IDL and served as the Oversight Chair in the UW student senate.",
    logo: uwSeal,
  },
  {
    date: "1.3.22 ~ 3.18.22",
    title: "CSE 442 Data Visualization — TA",
    location: "Seattle, Washington",
    description:
      "I TA'd for the first time in my final quarter as an undergraduate student for UW's Data Visualization course. I maintained the policy of \"any-hour-office-hours\", hosting office hours as late as 1 am for students in dire need of assistance. I focused on explaining concepts to students and helping them determine the best decisions for their visualizations.",
    logo: uwCseLogo,
  },
];

type ExperienceTimelineProps = {
  isDesktop: boolean;
};

export function ExperienceTimeline({ isDesktop }: ExperienceTimelineProps) {
  return (
    <Box sx={{ maxHeight: "70vh", overflow: "auto", mt: 4 }}>
      <Timeline
        position={isDesktop ? "alternate" : "right"}
        sx={{ ml: isDesktop ? 0 : "-70%" }}
      >
        {experiences.map((experience) => (
          <TimelineItem>
            {isDesktop && (
              <TimelineOppositeContent sx={{ m: "auto 0" }}>
                <Typography variant="h5" color="primary.dark">
                  {experience.date}
                </Typography>
              </TimelineOppositeContent>
            )}

            <TimelineSeparator>
              <TimelineConnector sx={{ backgroundColor: "primary.dark" }} />
              <TimelineDot
                variant="outlined"
                sx={{ borderColor: "primary.dark" }}
              >
                <Avatar src={experience.logo} sx={{ width: 75, height: 75 }} />
              </TimelineDot>
              <TimelineConnector sx={{ backgroundColor: "primary.dark" }} />
            </TimelineSeparator>

            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Paper elevation={6} sx={{ px: 4, py: 4 }}>
                <Typography variant="h4" color="primary.dark" align="left">
                  {experience.title}
                </Typography>
                {!isDesktop && (
                  <Typography variant="h6" color="black" align="left">
                    {experience.date}
                  </Typography>
                )}
                <Typography variant="h6" color="primary" align="left" mb={2}>
                  {experience.location}
                </Typography>
                <Typography variant="body1" align="left">
                  {experience.description}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
