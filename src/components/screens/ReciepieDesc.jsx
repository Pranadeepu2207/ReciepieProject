import React from "react";

import { useState, useCallback } from "react";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, RefreshControl, Pressable } from "react-native";

const ReciepieDesc = ({ route }) => {
    const { reciepie } = route.params
    const [showIngredients, setShowIngredients] = useState(false)
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000);
    }, [])

    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <SafeAreaProvider style={{ backgroundColor: '#fff888' }}>
            <SafeAreaView>
                <ScrollView style={styles.mainCont} refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                    <Image source={{ uri: reciepie.imageUrl }} style={styles.reciepieImage} />
                    <View>
                        <Text style={styles.tittles}>{reciepie.name}</Text>
                        <Text style={styles.descriptions}>category: <Text style={styles.specialText}>{reciepie.category}</Text> | Duration: <Text style={styles.specialText}>{reciepie.duration}</Text></Text>
                        {showIngredients && <View>
                            <Text style={styles.tittles}>Ingredients</Text>
                            {reciepie.ingredients.map((ingredient, index) => (
                                <Text style={styles.descriptions} key={index}>{ingredient}</Text>
                            ))}
                        </View>}
                        {showIngredients ? (
                            <TouchableOpacity style={styles.viewIngredientsBtn} onPress={() => setShowIngredients(false)}>
                                <Text>Close Ingredients</Text>
                            </TouchableOpacity>
                        ) : (
                            <Pressable style={styles.viewIngredientsBtn} onPress={() => setShowIngredients(true)}>
                                <Text>View Ingredients</Text>
                            </Pressable>
                        )}
                        <View>
                            <Text style={styles.tittles}>steps</Text>
                            {reciepie.steps.map((step, index) => (
                                <Text style={styles.descriptions} key={index}>{index + 1}. {step}</Text>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider >
    )
}

const styles = StyleSheet.create({
    reciepieImage: {
        height: 300,
        width: '100%',
        borderRadius: 10
    },
    tittles: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    mainCont: {
        margin: 10,
    },
    descriptions: {
        fontSize: 15,
        fontWeight: '300',
        color: '#210101ff'
    },
    specialText: {
        color: '#bb5016ff',
        fontStyle: 'italic'
    },
    specialTittle: {
        color: '#aaa',
        fontWeight: '500'
    },
    viewIngredientsBtn: {
        backgroundColor: 'rgba(228, 21, 21, 0.07)',
        padding: 10,
        alignItems: 'center',
        margin: 20,
    }
})

export default ReciepieDesc