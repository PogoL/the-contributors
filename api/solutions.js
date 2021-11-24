import axios from 'axios';
import vars from '../envVars';
import { retrieveData } from '../utils/AsyncStorageHelper';

export const fetchPostSolutions = async (postId) => {
    try {
        const url = `${vars.azureApiUrl}GetSolutionsForPostFunction?code=${vars.azureKey}&postId=${postId}`;
        var response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export const addSolution = async ({ title, description, postId, image }) => {
    try {
        var formData = new FormData();
        var user = JSON.parse(await retrieveData('user'));
        formData.append('image', { type: 'image/jpg', uri: image.uri, name: `${title}.jpg` });
        formData.append('title', title);
        formData.append('description', description);
        formData.append('postId', postId);
        formData.append('userId', user.id);

        const url = `${vars.azureApiUrl}AddSolutionFunction?code=${vars.azureKey}`;
        await axios.post(url, formData);
    } catch (err) {
        console.error(err);
    }
};
