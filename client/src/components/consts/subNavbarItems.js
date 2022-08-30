import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const subNavbarItems = [
    {
        id: 0,
        icon: <LogoutIcon />,
        label: 'Log Out',
        route: 'logout',
        showLoggedIn: true,
    },
    {
        id: 1,
        icon: <LoginIcon />,
        label: 'Log In',
        route: 'login',
        showLoggedIn: false,
    },
    {
        id: 2,
        icon: <PersonAddIcon />,
        label: 'Register',
        route: 'register',
        showLoggedIn: false,
    }
]