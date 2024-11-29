import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { buttonStyles } from "../../style/buttonStyles";

const ProfileHeader = () => {

return (

<View style={styles.container}>

<Image />

<Text style={styles.text}>Nama</Text>

<View style={styles.counterContainer}>

<View style={styles.itemContainer}>

<Text style={styles.numberText}>number</Text>

<Text style={styles.labelText}>label</Text>

</View>

<TouchableOpacity style={buttonStyles.grayOutlinedButton}>

<Text style={buttonStyles.grayOutlinedButtonText}>EditProfile</Text>

</TouchableOpacity>

</View>

</View>

);

};

export default ProfileHeader;

const styles = StyleSheet.create({
    container: {

        paddingVertical: 20,
        
        alignItems: 'center',
        
        borderBottomWidth: 1,
        
        borderColor: 'lightgray',
        
        },
        
        text: {
        
        fontSize: 16,
        
        fontWeight: 'bold',
        
        marginTop: 8,
        
        },
        
        counterContainer: {
        
        flex: 1,
        
        flexDirection: 'row',
        
        padding: 6,
        
        alignItems: 'center',
        
        },
        itemContainer: {

            alignItems: 'center',
            
            margin: 10,
            
            justifyContent: 'space-between',
            
            width: 70,
            
            },
            
            numberText: {
            
            fontWeight: 'bold',
            
            fontSize: 16,
            
            },
            
            labelText: {
            
            color: 'gray',
            
            fontSize: 11,
            
            fontWeight: 'bold',
            
            },
})