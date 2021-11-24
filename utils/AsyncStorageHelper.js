import { AsyncStorage } from 'react-native';

export const saveData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log(error);
    }
};

export const retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
        throw Error("Can't retrieve data from storage");
    } catch (error) {
        console.log(error);
    }
};
