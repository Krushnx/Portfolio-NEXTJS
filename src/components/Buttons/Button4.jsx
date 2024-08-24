import Link from 'next/link';
import './btn.css'
const Button4 = ({val , link}) => {
    return (
        <Link href={link}>
      <button className="button-4">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">{val}</span>
      </button>
        </Link>
    );
  };
  
  export default Button4;