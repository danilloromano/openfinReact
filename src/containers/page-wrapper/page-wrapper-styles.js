import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  main: {
    height: '100vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.background.main,
  }
}));

export default styles 