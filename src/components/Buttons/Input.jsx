import './btn.css'

const Input1 = ({lable , placeholder}) => {

    return (
        <div className="form__group field mt-[10px]">
            <input type="input" className="form__field" placeholder={placeholder} required=""></input>
            <label for="name" className="form__label">{lable}</label>
        </div>
    );
}

export default Input1;