// import Validate from "validate.js"

export default class {
    constructor() {

    }

    init(options) {
        console.log(1);
        this.form = options.form;
        this.inputs = this.form.querySelectorAll(".js-input");

        this.action = this.form.action;
        this.method = this.form.method;
        this.bindEvents(this.inputs);
    }

    bindEvents(inputs) {
        console.log(this.form);
        this.form.addEventListener("submit", (event)=> {
            this.inputName = this.form.querySelector(".form__input-contact_name").value;
            this.inputeMail = this.form.querySelector(".form__input-contact_email").value;
            this.inputText = this.form.querySelector(".form__input-contact_message").value;
            console.log(3);
            event.preventDefault();
            // то есть если пройдена валидация, то при проверке на validate.ls при true
            // (здесь эти данные принимаются) то вызывается метод
            this.sendForm();
        })
    }

    sendForm() {
        const formData = new FormData();
        formData.append('name', this.inputName);
        formData.append('phone', this.inputeMail);
        formData.append('comment', this.inputText);
        formData.append('to', "n.s.sadovnikov@yandex.ru");
        fetch(this.action, {
            method: this.method,
            header: { "X-Requested-With":"XMLHttpRequest" },
            body: formData
        }).then((response)=>{
            if (response.ok) {
                return response;
            } else {
                console.log(response.status);
            }
        }).then((response)=>{
            return response.json();
        }).then(()=>{
            this.inputs.forEach(function (item) {
                item.value = "";
            })
        })
    }
}