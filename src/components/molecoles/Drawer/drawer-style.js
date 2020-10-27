import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 200;

const drawerStyles = makeStyles((theme) => ({
  drawerClosed: {
    flexShrink: 0,
    width: drawerWidth,
    height: '100%',
    transition: theme.transitions.create('translateX(-200px)', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
  }),
    // transform: 'translateX(-200px)',
    // transition: 'all 0.1s ease-out'
  },
  drawerOppened: {
    width: drawerWidth,
    transition: theme.transitions.create('translateX(0px)', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
  }),

  },
  drawerPaper: {
    flexShrink: 0,
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

}));

export default drawerStyles