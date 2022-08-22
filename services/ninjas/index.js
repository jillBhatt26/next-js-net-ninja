const fetchNinjasInfo = async (id = null) => {
    let url = 'https://jsonplaceholder.typicode.com/users/';

    if (id) {
        url += id;
    }

    try {
        const ninjasResponse = await fetch(url);

        return await ninjasResponse.json();
    } catch (error) {
        return error.message || 'Failed to fetch information...';
    }
};

export { fetchNinjasInfo };
