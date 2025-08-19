/* eslint-disable react-native/no-inline-styles */
import React from 'react'

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet} from 'react-native'

import { reciepies } from '../data/ReciepieData'

const ReciepieList = ({ navigation }) => {


    const renderRecipie = ({ item }) => {
        return (
            <SafeAreaProvider>
                <SafeAreaView>
                    <View style={styles.containerList}>
                        <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ReciepieDesc', { reciepie: item })}>
                            <Image source={{ uri: item.imageUrl }} style={styles.reciepieImage} />
                            <View style={styles.textContainer}>
                                <Text style={styles.reciepieName}>{item.name}</Text>
                                <Text style={styles.specialTittle}>Category: <Text style={styles.specialText}>{item.category}</Text> | Duration: <Text style={styles.specialText}>{item.duration}</Text></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        )
    }

    return (

        <View style={{ backgroundColor: '#fff888' }}>
            <FlatList inverted data={reciepies} renderItem={renderRecipie} keyExtractor={(item) => item.id.toString()} />
        </View>
    )
}

const styles = StyleSheet.create({
    containerList: {
        alignItems: 'center'
    },
    itemContainer: {
        alignItems: 'center',
        margin: 20
    },
    reciepieImage: {
        height: 200,
        width: 200,
        borderRadius: 50,
        marginBottom: 10
    },
    textContainer: {
        alignItems: 'center'
    },
    reciepieName: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    specialText: {
        color: '#bb5016ff',
        fontStyle: 'italic'
    },
    specialTittle: {
        color: '#aaa',
        fontWeight: '500'
    }
})

export default ReciepieList