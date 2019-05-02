import axios from 'axios';

const getList = (type) => {
    return axios.get(`/${type}`)
        .then(
            (response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }
                return response;
            }
        )
        .catch(err => {
            return err.response || err;
        });
}

const getItem = (type, id) => {
    return axios.get(`/${type}/${id}`)
        .then(
            (response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }
                return response;
            }
        )
        .catch(err => {
            return err.response || err;
        });
}

const deleteItem = (type, id) => {
    return axios.delete(`/${type}/${id}`)
            .then(
                (response) => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                        return;
                    }
                    return response;
                }
            )
            .catch(err => {
                return err.response || err;
            });
}

const postItem = (type, data) => {
    return axios.post(`/${type}`, data)
        .then(
            (response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }
                return response;
            }
        )
        .catch(err => {
            return err.response || err;
        });
}

const editItem = (type, id, data) => {
    return axios.put(`/${type}/${id}`, data)
        .then(
            (response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }
                return  response;
            }
        )
        .catch(err => {
            return err.response || err;
        });
}
export {
    getList,
    getItem,
    deleteItem,
    postItem,
    editItem
}