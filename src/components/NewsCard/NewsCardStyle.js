import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        backgroundColor: "#FFFFFF",
        margin: 10,
        borderRadius: 15,
    },
    image: {
        height: Dimensions.get("window").height/4 ,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000",
    },
    description: {
        marginTop: 3,
    },
    inner_container: {
        padding: 5,
    },
    author: {
        fontStyle: "italic",
        textAlign: "right",
        color: "#000000",
    },

});