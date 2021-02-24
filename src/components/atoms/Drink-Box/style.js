import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
    drink_container: {
      display: 'flex',
      width: 235,
      height: 235,
      padding: 10,
      margin: '0.5em',
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: '5%',
      cursor: 'pointer',
      color: theme.palette.primary.dark,
      "&:hover": {
        color: theme.palette.secondary.dark,
        backgroundColor: theme.palette.action.hover,
      }
    },
    drink_id: {
      display: 'none',
    },
    drink_image: {
      hight: 'auto',
      width: '80%',
      border: '2px solid',
      borderColor: theme.palette.secondary.dark,
      borderRadius: '5%'
    },
    drink_name: {
      fontSize: 14,
      maxWidth: 200,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }));

export default style 