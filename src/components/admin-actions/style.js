import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    buttons: {
       display: 'flex',
       justifyContent: 'space-around',
       width: 700,
       margin: '0 auto',
    },
    fields: {
        width: 450,
        margin: '20px auto'
    },
    filter: {
        margin: '10px 10px 10px 10px',
        width: '200px',
        fontSize: '30px'
    }
}));

export default useStyles;