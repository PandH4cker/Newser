import { autoRehydrate } from "redux-persist";

export const styles = {
    gestureContainer: {
        backgroundColor: 'black'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    innerImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        /*top: 0,
        left: 0,
        width: '100%',
        height: '100%'*/
    },
    underImageView: {
        left: 0,
        right: 0,
        bottom: 150,
        position: 'absolute',
        padding: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'black'
    },
    textStyle: {
        fontSize: 24,
        color: '#fff',
    }
};