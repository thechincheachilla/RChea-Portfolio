import { 
    Stack,
    styled,
    Typography
} from '@mui/material';
import { NavLink } from 'react-router-dom'

type NavItem = {
    text: string
    link: string
}

const StyledNavLink = styled(NavLink)(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&.active':
        {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.light
        },
    padding: 10,
    borderRadius: 10
}))

export function NavigationBar() {
    const navItems: NavItem[] = [
        {
            text: "Home",
            link: "/home"
        },
        {
            text: "Experience",
            link: "/experience"
        },
        {
            text: "Projects",
            link: "/projects"
        },
        {
            text: "Powerlifting",
            link: "/powerlifting"
        },
        {
            text: "Desk of the Day",
            link: "/desk-of-the-day"
        },
        {
            text: "About",
            link: "/about"
        }
    ]
    
    return (
        <Stack direction='row' columnGap={4} m={4}>
            {navItems.map(({ text, link }) => (
                <Typography
                    component={StyledNavLink}
                    to={link}
                    variant='h4'
                    color='primary'
                >
                    {text}
                </Typography>
            ))}
        </Stack>
    )
}