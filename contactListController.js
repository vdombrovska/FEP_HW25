import ContactCollection from './controller/contactListModelFile'
import contactItemView from './view/contactItemView'
import ContactListFormView from './view/contactListFormView'


class ContactListController {
    constructor(container) {
        this._contactListView = new ContactListFormView ;
        this._view = new contactItemView(container, {
            onAdd: (id) => this. createNewUser(newUser),
            onDelete: (id) => this. deleteteUser(data),
            onEdit: (data) => this. updateUser(data),
            })
        

        this._contactList = new ContactCollection();
        this._contactList.fetchList();
        this._contactList.then(() => this._view.renderList(this._contactList));
    }

    deleteteUser(data) {
        this._contactList.deleteteUser(data);
        this._view.renderList(this._contactList);
    }

    createNewUser(newUser) {
        this._contactList.createNewUser(newUser);
        this._view.renderList(this._contactList);
    }

    updateUser(data) {
        this._contactList.updateUser(data);
        this._view.renderList(this._contactList);
    }
}      
