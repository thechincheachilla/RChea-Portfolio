import {
  Drawer,
  IconButton,
  ListItemButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

type NavigationBarProps = {
  isDesktop: boolean;
};

type NavItem = {
  text: string;
  link: string;
};

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  "&.active": {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
  },
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 15,
  paddingBottom: 15,
  borderRadius: 5,
}));

export function NavigationBar({ isDesktop }: NavigationBarProps) {
  const navItems: NavItem[] = [
    {
      text: "Home",
      link: "/home",
    },
    {
      text: "Experience",
      link: "/experience",
    },
    {
      text: "Projects",
      link: "/projects",
    },
    {
      text: "Powerlifting",
      link: "/powerlifting",
    },
    // {
    //   text: "Desk of the Day",
    //   link: "/desk-of-the-day",x
    // },
    // {
    //   text: "About",
    //   link: "/about",
    // },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (event: React.MouseEvent) => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isDesktop && (
        <Stack direction="row" columnGap={1} m={3}>
          {navItems.map(({ text, link }) => (
            <Typography
              component={StyledNavLink}
              to={link}
              variant="h4"
              color="primary"
              key={text}
            >
              {text}
            </Typography>
          ))}
        </Stack>
      )}
      {!isDesktop && (
        <>
          <IconButton onClick={toggleMenu}>
            <MenuOpenIcon fontSize="large" color="primary" />
          </IconButton>
          <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
            {navItems.map(({ text, link }) => (
              <ListItemButton
                key={text}
                component={Link}
                to={link}
                onClick={() => setIsMenuOpen(false)}
                sx={{ minHeight: "50px", maxHeight: "5%" }}
              >
                <Typography variant="h4" color="primary">
                  {text}
                </Typography>
              </ListItemButton>
            ))}
          </Drawer>
        </>
      )}
    </>
  );
}
