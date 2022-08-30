import HomeIcon from '@mui/icons-material/Home';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PeopleIcon from '@mui/icons-material/People';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <HomeIcon />,
        label: 'Studio',
        route: 'studio'
    },
    {
        id: 1,
        icon: <BookOnlineIcon />,
        label: 'Bookings',
        route: 'bookings'
    },
    {
        id: 2,
        icon: <RoomPreferencesIcon />,
        label: 'Rooms',
        route: 'rooms'
    },
    {
        id: 3,
        icon: <HeadphonesIcon />,
        label: 'Engineers',
        route: 'engineers'
    },
    {
        id: 4,
        icon: <PeopleIcon />,
        label: 'Clients',
        route: 'clients'
    },
    {
        id: 5,
        icon: <FormatListBulletedIcon />,
        label: 'Assets',
        route: 'assets'
    },
]