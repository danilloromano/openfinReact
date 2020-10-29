import { makeStyles } from '@material-ui/core/styles';

const constainerStyles = makeStyles((theme) => ({
    container: {
        padding: '8px',
    },
    text: {
        maxWidth: '200px', 
        '&& span': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        }
    }
}))

export default constainerStyles