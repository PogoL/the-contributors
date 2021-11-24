import axios from 'axios';
import vars from '../envVars';
import { retrieveData } from '../utils/AsyncStorageHelper';

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
    retailer,
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
        formData.append('retailer', retailer);
        formData.append('retailerAddress', retailerAddress);
        formData.append('userId', user.id);
        // console.log(formData);
        const url = `${vars.azureApiUrl}AddPostFunction?code=${vars.azureKey}`;
        await axios.post(url, formData);
    } catch (err) {
        console.error(err);
    }
};
