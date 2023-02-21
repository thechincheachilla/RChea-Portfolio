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
    textDecoration: 'none'
}))

export function NavigationBar() {
    const navItems: NavItem[] = [
        {
            text: "HOME",
            link: "/home"
        },
        {
            text: "EXPERIENCE",
            link: "/experience"
        },
        {
            text: "PROJECTS",
            link: "/projects"
        },
        {
            text: "POWERLIFTING",
            link: "/powerlifting"
        },
        {
            text: "ABOUT",
            link: "/about"
        },
        {
            text: "DESK OF THE DAY",
            link: "/desk-of-the-day"
        }
    ]
    
    return (
        <Stack direction='row' columnGap={4} m={4}>
            {navItems.map(({ text, link }) => (
                <Typography
                    component={StyledNavLink}
                    to={link}
                    variant='h5'
                    color='primary'
                >
                    {text}
                </Typography>
            ))}
        </Stack>
    )
}