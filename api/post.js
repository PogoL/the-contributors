import axios from 'axios';
import vars from '../envVars';
import { retrieveData } from '../utils/AsyncStorageHelper';
import { handleError } from './helpers';

export const fetchAllPosts = async () => {
    try {
        const url = `${vars.azureApiUrl}GetAllPostsFunction?code=${vars.azureKey}`;
        var response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export const addPost = async ({
    title,
    description,
    question,
    latitude,
    longitude,
    retailerName,
    userId,
    image,
    retailerAddress,
}) => {
    try {
        var formData = new FormData();
        var user = JSON.parse(await retrieveData('user'));
        formData.append('image', { type: 'image/jpg', uri: image.uri, name: `${title}.jpg` });
        formData.append('title', title);
        formData.append('question', question);
        formData.append('description', description);
        formData.append('latitude', latitude);
        formData.append('longitude', longitude);
        formData.append('retailerName', retailerName);
        formData.append('retailerAddress', retailerAddress);
        formData.append('userId', user.id);

        const url = `${vars.azureApiUrl}AddPostFunction?code=${vars.azureKey}`;
        await axios.post(url, formData);
    } catch (err) {
        handleError('Adding failed', 'Try again', err, 'Adding post failed. Try again.');
        console.error(err);
    }
};
