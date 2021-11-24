import ENV from '../../envVars';

export const ADD_POST = 'ADD_POST';

export const addPost = (
    title: string,
    question: string,
    description: string,
    latitude: number,
    longitude: number,
    userId: string,
    image: any,
    retailer: string
) => {
    return async (dispatch) => {
        var formData = new FormData();
        formData.append('image', { type: 'image/jpg', uri: image.uri, name: `${title}.jpg` });
        formData.append('title', title);
        formData.append('question', question);
        formData.append('description', description);
        formData.append('latitude', latitude.toString());
        formData.append('longitude', longitude.toString());
        formData.append('userId', userId);
        //formData.append('retailer', retailer); //TODO uncomment when retailer added to API

        const response = fetch(`${ENV.azureApiUrl}AddPostFunction?code=${ENV.azureKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        });

        dispatch({
            type: ADD_POST,
            postData: {
                id: 'ASDASDAS',
                title,
                question,
                description,
                latitude,
                longitude,
                userId,
                image: image.uri,
                retailer,
            },
        });
    };
};
