import axios from 'axios';
import vars from '../envVars';
import { Alert } from 'react-native';
import { saveData, retrieveData } from '../utils/AsyncStorageHelper';
import { handleError } from './helpers';
import { getCurrentCordinates } from '../utils/locationHelper';

export const authenticateUser = async (username, password) => {
    try {
        // const url = `${vars.azureApiUrl}UserLoginFunction?code=${vars.azureKey}`;
        // var response = await axios.post(url, {
        //     login: username,
        //     password: password,
        // });

        // saveData('user', response.data);
        var currentCordinates = await getCurrentCordinates();

        await saveData('currentCordinates', JSON.stringify(currentCordinates));
        return true;
    } catch (err) {
        handleError('Login Failed', 'Try again', err, 'Login failed. Try again.');
        return false;
    }
};
