import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 200;

const drawerStyles = makeStyles((theme) => ({
  drawerClosed: {
    flexShrink: 0,
    height: '100%',
    transition: theme.transitions.create('translateX(-200px)', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  drawerOppened: {
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

  dragger: {
    width: '5px',
    cursor: 'ew-resize',
    padding: '4px 0 0',
    borderTop: '1px solid #ddd',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: '100',
    backgroundColor: '#f4f7f9'
  }

}));

export default drawerStyles