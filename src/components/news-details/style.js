import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    name: {
        fontSize: '15px'
    },
    body: {
        fontSize: '10px'
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 20
    },
}));

export default useStyles;