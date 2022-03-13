import { FaTwitter } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaYoutubeSquare} from 'react-icons/fa';

import '../styles/Footer.scss'


export default function Footer (){
    return (
        <div className="footerWrapper">
            <ul>
                <li><FaTwitter color='lightblue'/></li>
                <li className='fbIcon'><FaFacebookSquare color='blue'/></li>
                <li><FaYoutubeSquare  color='red'/></li>
                <li>instagram</li>
            </ul>
            <h4>HMM</h4>
        </div>
    )
}