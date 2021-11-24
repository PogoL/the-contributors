import axios from 'axios';
import vars from '../envVars';

export const fetchAllPosts = async () => {
    try {
        const url = `${vars.azureApiUrl}GetAllPostsFunction?code=${vars.azureKey}`;
        var response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.errorr(err);
    }
};
