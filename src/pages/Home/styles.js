import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles(() => ({
    home_container: {
      paddingTop: 36,
      display: 'flex',
      flexWrap: 'wrap',
      height:'calc(100vh - 30px)',
      overflow:'auto',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '300px',
  },
  }));

export default style 