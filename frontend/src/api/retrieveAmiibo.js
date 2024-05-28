
const retrieveAmiiboList = async () => {
    return await fetch('http://localhost:8080/update_amiibo_list').then(response => response.json());
}

export default {retrieveAmiiboList};