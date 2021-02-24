import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
    drink_container: {
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
      width: 235,
      height: 235,
      backgroundColor: 'transparent',
      padding: '0.5em',
    },
    drink_id: {
      display: 'none',
    },
    drink_image: {
      hight: 'auto',
      width: '80%',
      border: '4px solid RebeccaPurple ',
      borderRadius: '5%'
    },
    drink_name: {
      color: theme.palette.primary.dark,
      fontSize: 12
    }
  }));

export default style 