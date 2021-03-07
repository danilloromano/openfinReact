import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  main: {
    height: '100vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 30px)',
    backgroundColor: theme.background.main,
  }
}));

export default styles 