import { makeStyles } from '@material-ui/core/styles';

const footerStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '30px',
      backgroundColor: theme.palette.primary.main
    },
  }));

export default footerStyles 