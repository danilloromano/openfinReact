import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles((theme) => ({
    root: { 
        flexGrow: 1,
        backgroundColor: theme.palette.primary.main,
    },
    tollbar: { 
        minHeight: '30px',
        height: '30px',
        color: theme.palette.primary.contrastText,
    },
    hide: { display: 'none' },
    menuButton: {
        height: '30px',
        width: '30px',
        color: "#ffffff"
    }
}));

export default headerStyles 