import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles(() => ({
    root: { flexGrow: 1 },
    tollbar: {  minHeight: '30px', height: '30px', color: '#ffffff' },
    title: { flexGrow: 1, fontSize: '14px' },
    hide: { display: 'none' },
    menuButton: {
        height: '30px',
        width: '30px',
        color: "#ffffff"
    }
}));

export default headerStyles 