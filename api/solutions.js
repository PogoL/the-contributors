import axios from 'axios';
import vars from '../envVars';

export const fetchPostSolutions = async (postId) => {
    try {
        const url = `${vars.azureApiUrl}GetSolutionsForPostFunction?code=${vars.azureKey}&postId=${postId}`;
        var response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};
