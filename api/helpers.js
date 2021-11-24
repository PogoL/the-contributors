import { Alert } from 'react-native';

export const handleError = (alertTitle, buttonText, err, noResponseMessage) => {
    Alert.alert(alertTitle, err.response?.data?.message || noResponseMessage, [
        {
            text: buttonText,
        },
    ]);
};
