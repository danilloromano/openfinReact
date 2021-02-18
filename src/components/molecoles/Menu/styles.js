import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
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