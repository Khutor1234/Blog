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
        marginRight: 20,
        cursor: 'pointer'
    },
    header: {
        fontSize: '30px',
        lineHeight: '30px',
        marginBottom: 10
    },
    subheader: {
        color: '#e91e63'
    },
    item: {
        marginBottom: 30,
        borderBottom: '2px solid #e91e63'
    }
}));

export default useStyles;