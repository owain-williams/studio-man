const drawerWidth = 220;

export const navbarStyles = {
    containerBox: {
        display: 'flex',
    },
    appBar: {
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
    },
    iconButton: {
        mr: 2, display: { sm: 'none' }
    }
}