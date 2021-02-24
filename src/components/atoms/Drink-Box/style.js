import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
    drink_container: {
      display: 'flex',
      width: 'calc(20% - 1em)',
      paddingTop: '1em',
      paddingBottom: '1em',
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
      fontSize: '1vw',
      maxWidth: 200,
      marginBottom: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }));

export default style 