import axios from 'axios';
import vars from '../envVars';
import { Alert } from 'react-native';
import { saveData } from '../utils/AsyncStorageHelper';
import { handleError } from './helpers';

export const authenticateUser = async (username, password) => {
    try {
        const url = `${vars.azureApiUrl}UserLoginFunction?code=${vars.azureKey}`;
        console.log(url);
        var response = await axios.post(url, {
            login: username,
            password: password,
        });
        saveData('user', response.data);
        return true;
    } catch (err) {
        handleError('Login Failed', 'Try again', err, 'Login failed. Try again.');
        return false;
    }
};
