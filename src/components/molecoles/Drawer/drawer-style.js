import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 200;

const drawerStyles = makeStyles((theme) => ({
  drawerClosed: {
    flexShrink: 0,
    // display: 'none',
    width: drawerWidth,
    transform: 'translateX(-200px)',
    transition: 'all 0.3s ease-out'
  },
  drawerOppened: {
    // display: 'flex',
    width: drawerWidth,
    transform: "translateX(0px)",
    transition: 'all 0.3s ease-in'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

}));

export default drawerStyles