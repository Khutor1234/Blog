import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    buttons: {
       display: 'block'
    },
    button: {
        width: 100,
        margin: '10px 10px 0 0'
    },
    avatar: {
        width: 100,
        height: 100,
        marginRight: 20
    },
    header: {
        fontSize: '25px',
        lineHeight: '25px',
        marginBottom: 10
    }
}));

export default useStyles;