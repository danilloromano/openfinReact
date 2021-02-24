import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles((theme) => ({
    root: { 
        position: 'fixed',
        bottom: 0,
        left: 0,
        flexGrow: 1,
        backgroundColor: theme.palette.primary.main,
    },
    tollbar: { 
        minHeight: '30px',
        height: '30px',
        color: theme.palette.primary.contrastText,
    },
    hide: { visibility: 'hidden' },
    menuButton: {
        opacity: 1,
        height: '30px',
        width: '30px',
        color: "#ffffff"
    }
}));

export default headerStyles 