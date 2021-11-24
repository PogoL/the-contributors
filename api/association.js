import axios from 'axios';
import vars from '../envVars';
import { retrieveData } from '../utils/AsyncStorageHelper';

export const checkIfUserIsAssociatedWithElement = async (elementId) => {
    try {
        var user = JSON.parse(await retrieveData('user'));
        const url = `${vars.azureApiUrl}checkIfUserIsAssociatedWithElementFunction`;

        var result = await axios.get(url, {
            params: {
                code: vars.azureKey,
                userId: user.id,
                elementId,
            },
        });
        return result.data;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export const toggleUserAssociationWithElement = async (elementId, type) => {
    try {
        var user = JSON.parse(await retrieveData('user'));
        const url = `${vars.azureApiUrl}toggleUserAssociationWithElementFunction?code=${vars.azureKey}`;

        await axios.post(url, {
            userId: user.id,
            elementId,
            type,
        });
    } catch (error) {
        console.error(error);
    }
};
