import { FaTwitter } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaYoutubeSquare} from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';



import '../styles/Footer.scss'


export default function Footer (){

    const twitter = `https://twitter.com/`
    const facebook = `https://facebook.com/`
    const youtube = `https://www.youtube.com/`
    const instagram = `https://www.instagram.com/?hl=de`
    return (
        <div className="footerWrapper">

            <ul>
                <li><a href={twitter} target="_blank"><FaTwitter color='lightblue' className='icon' /> </a></li>
                <li> <a href={facebook} target="_blank"><FaFacebookSquare color='blue'/></a></li>
                <li>   <a href={youtube} target="_blank"><FaYoutubeSquare  color='red'/></a> </li>
                <li> <a href={instagram} target="_blank">  < FaInstagramSquare color='lilac' /> </a></li>
            </ul>
            <h4> <FaCopyright  color='aqua'/> 2022 Hmm</h4>
        </div>
    )
}