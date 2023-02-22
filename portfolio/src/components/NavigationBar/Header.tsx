import { AppBar, Toolbar, Typography, /*useMediaQuery*/ } from "@mui/material";
import { NavigationBar } from "./NavigationBar";

export function Header() {
    // const isDesktop = useMediaQuery(
    //     ({ breakpoints }: Theme) => breakpoints.up('md'),
    //     {
    //         noSsr: true
    //     }
    // )

    return (
        <AppBar elevation={2} sx={({ palette }) => ({ backgroundColor: palette.background.default, position: 'static' })}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h1" color='primary'>チア雷電</Typography>
                <NavigationBar />
            </Toolbar>
        </AppBar>
    )
}