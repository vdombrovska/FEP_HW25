class contactListView {
    constructor(config) {
        this._contactListFormView = new ContactListFormView(config);
        this._contactItewView = new ContactItewView(config);

    }

    renderList(data) {
        this._contactListFormView.renderList(data);
    }
}