contactForm.addEventListener('submit', onAddBtnClick);

import ContactCollection from './model/contactListModelFile'

export default class ContactItewView {
    static formInputs = document.querySelectorAll('.form-input');
    static userTemplate = document.querySelector('#userTemplate').innerHTML;
    constructor (input) {
        const contact = {};
        formInputs.forEach((input) => { contact[input.name] = input.value;});

    }

    onAddBtnClick(element) {
        element.preventDefault();
        if (isAllFieldsCorrect(newContact)) {
            ContactCollection.createNewUser(newContact);
            clearInputs();
        } else {
            alert('Please check your data');
        }
    }
    isAllFieldsCorrect(contact) {
        return (
            isFirstNameCorrect(contact.firstName) &&
            isLastNameCorrect(contact.lastName) &&
            isPhoneCorrect(contact.phone) 
        );
    }
    
     isFirstNameCorrect(value) {
        return value !== '';
    }
    
     isLastNameCorrect(value) {
        return value !== '';
    }
    
    isPhoneCorrect(value) {
        return value !== '' && !isNaN(value);
    }

    clearInputs (){
        contact.name = '';
        contact.email = '';
        contact.phone = '';
    }

    createNewLineHTML ( contact){
        return  interpolate(userTemplate, contact);
    }
    
    interpolate(template, obj) {
        for (key in obj) {
            template = template.replaceAll(`{{${key}}}`, obj[key]);
        }
        return template;
    }
    renderList() {
        contactsListEl.innerHTML = contactsList.map(createNewLineHTML).join('\n');
    }
}