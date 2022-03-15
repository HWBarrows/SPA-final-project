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

            <ul className='footerList'>
                <li className='listItem'><a href={twitter} target="_blank"><FaTwitter color='#e9fbff' className='icon' /> </a></li>
                <li className='listItem'> <a href={facebook} target="_blank"><FaFacebookSquare color='#95ccee'/></a></li>
                <li className='listItem'>   <a href={youtube} target="_blank"><FaYoutubeSquare  color='#e9fbff'/></a> </li>
                <li className='listItem'> <a href={instagram} target="_blank">  < FaInstagramSquare color='#95ccee' /> </a></li>
            </ul>
            <h4> <FaCopyright  color='#95ccee'/> <span className='footerSpan'>2022 Hmm</span></h4>
        </div>
    )
}