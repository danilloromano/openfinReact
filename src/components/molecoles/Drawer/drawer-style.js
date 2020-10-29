import { makeStyles } from '@material-ui/core/styles';

const drawerStyles = makeStyles((theme) => ({
  drawerClosed: {
    flexShrink: 0,
    display:'none',
    transition: theme.transitions.create('display', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  drawerOppened: {
    display:'flex',
    transition: theme.transitions.create('display', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX:'hidden'
  },

  drawerPaper: {
    flexShrink: 0,
    position: 'relative',
    overflowX: 'hidden'
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