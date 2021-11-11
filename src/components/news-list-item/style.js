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
        width: 150,
        height: 150,
        marginRight: 20
    },
    header: {
        fontSize: '30px',
        lineHeight: '30px',
        marginBottom: 10
    }
}));

export default useStyles;