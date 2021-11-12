import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    name: {
        fontSize: '16px',
        textTransform: 'uppercase'
    },
    body: {
        fontSize: '12px'
    },
    img: {
        width: 80,
        height: 80,
        marginRight: 20
    },
    email:{
        fontSize: '12px',
        color: '#e91e63',
        marginTop: 10,
        textTransform: 'uppercase'
    }
}));

export default useStyles;