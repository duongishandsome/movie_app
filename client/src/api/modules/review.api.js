import privateClient from '../client/private.client';

const reviewEndpoints = {
    add: '/reviews',
    list: '/reviews',
    remove: ({ reviewId }) => `reviews/${reviewId}`,
};

const reviewApi = {
    add: async ({ mediaId, mediaType, mediaTitle, mediaPoster, content }) => {
        try {
            const response = await privateClient.post(reviewEndpoints.add, {
                mediaId,
                mediaType,
                mediaTitle,
                mediaPoster,
                content,
            });

            return { response };
        } catch (error) {
            return { error };
        }
    },
    list: async () => {
        try {
            const response = await privateClient.get(reviewEndpoints.list);
            return { response };
        } catch (error) {
            return { error };
        }
    },
    remove: async ({ reviewId }) => {
        try {
            const response = await privateClient.delete(reviewEndpoints.remove({ reviewId }));
            return { response };
        } catch (error) {
            return { error };
        }
    },
};

export default reviewApi;
