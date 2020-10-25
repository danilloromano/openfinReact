import { makeStyles } from '@material-ui/core/styles';

const constainerStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        width: '100%',
        padding: '2em',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: '-200px'
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
}))

export default constainerStyles
