contactsListEl.addEventListener('click', onDeleteBtnClick);
export default class ContactListFormView {
 
    static contactsList = []
    static DELETE_BTN = 'delete';
    static EDIT_BTN = 'edit';
    static LINE_SELECTOR = '.line';
    static contactsListEl = document.querySelector('#contactsList');
    static formInputs = document.querySelectorAll('.form-input');
    constructor (config){
        this.config = config;
    }

    onDeleteBtnClick(element) {
        if (element.target.classList.contains(DELETE_BTN)) {
            const tr = findLine(element.target);
            contactListFormView.deleteUser (tr);
        } else (element.target.classList.contains(EDIT_BTN)) 
            const tr = findLine(element.target);
            contactListFormView.updateUser (tr);
    }

    renderList() {
        contactsListEl.innerHTML = contactsList.map(createNewLineHTML).join('\n');
    }

    findLine(el) {
        return el.closest(LINE_SELECTOR);
    }

    updateInfoFromInput (contact){
        contact.id = contact.id;
        formInputs.forEach((input) => { contact[input.name] = input.value;});
        renderList();
    }  
}