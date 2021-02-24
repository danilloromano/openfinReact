import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: "100%",
    display: 'flex',
    padding: '0 1em',
    backgroundColor: theme.palette.primary.main
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  button: {
    color: theme.palette.primary.contrastText
  }
}));

export default styles 