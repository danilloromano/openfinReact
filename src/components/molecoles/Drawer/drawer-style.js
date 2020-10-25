import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 200;

const drawerStyles = makeStyles((theme) => ({
  drawerClosed: {
    flexShrink: 0,
    width: drawerWidth,
    transform: 'translateX(-200px)',
    transition: 'all 0.3s ease-out'
  },
  drawerOppened: {
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
    padding: theme.spacing(3),
  },

}));

export default drawerStyles