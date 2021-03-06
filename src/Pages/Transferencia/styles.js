import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appBar: {
        height: 50,
        width: "100%",
        backgroundColor: "#f2f2f2",
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    saldoArea:{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    saldo:{
        fontSize: 18,
        color: "#f27405",
        fontWeight: "bold"
    },
    title:{
        fontSize: 14,
        color: "#0d0d0d"
    },
    logo:{
        height: 35,
        width: 150,
    },
    appBarImg:{
        width: 30,
        height: 30,
        marginHorizontal: 5,
    },
});

export default styles;