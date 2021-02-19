import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    container: {
        position: 'absolute',
        top: 36,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'calc(100% - 66px)',
        backgroundColor: 'transparent',
    },
}))

export default styles