import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		top: `50%`,
		left: `50%`,
		transform: `translate(-50%, -50%)`,
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		},
    button: {
        width: 100,
        margin: '10px 10px 0 0'
    },
    title:{
        width: '100%'
    },
    body: {
        marginTop: 10,
        maxWidth: '100%',
        minWidth: '100%'
    },
    buttonSubmit: {
        marginTop: 20,
        width: '100%'
    }
}));


export default useStyles;