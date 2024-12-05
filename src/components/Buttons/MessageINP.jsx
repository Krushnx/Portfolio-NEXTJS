import './btn.css'

const MessageINP = ({lable , placeholder}) => {

    return (
        <div className="form__group-msg field mt-[10px]">
            <textarea className="form__field" placeholder={placeholder} required></textarea>
            <label htmlfor="name" className="form__label">{lable}</label>
        </div>
    );
}

export default MessageINP;