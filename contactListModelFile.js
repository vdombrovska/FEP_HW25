 const USERS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/'

export default class ContactCollection {
    constructor(USERS_URL) {
        this._USERS_URL = USERS_URL;
    }

    fetchList() {
        return fetch(USERS_URL)
            .then((res) => res.json())
            .then((data) => (this.list = data));
    }
    
    createNewUser(newUser) {
        return fetch(USERS_URL, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => this.list.push(data));
        }
    
    
    updateUser(data) {
        return fetch(this._USERS_URL + data.id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json());
    }

    deleteUser(data) {
        return fetch(this._USERS_URL + id, {
            method: 'DELETE',
        }).then((res) => res.json());
    }
}
