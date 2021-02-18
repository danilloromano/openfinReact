import { makeStyles } from '@material-ui/core/styles';

const constainerStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        width: '100%',
        padding: '1em',
        backgroundColor: theme.background.main,
    },
}))

export default constainerStyles
