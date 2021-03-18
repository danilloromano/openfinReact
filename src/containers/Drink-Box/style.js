import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
    drink_container: {
      display: 'flex',
      width: 200,
      height: 220,
      paddingTop: '1em',
      paddingBottom: '1em',
      margin: '16px',
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: '5%',
      cursor: 'pointer',
      color: theme.background.contrastText,
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
      marginBottom: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }));

export default style 