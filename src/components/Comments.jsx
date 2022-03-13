import { ProfileContext } from '../contexts/ProfileContext'
import { useContext } from 'react'


export default function SaveComments(){

    const [profile, setProfile ] = useContext(ProfileContext)

    //save comment array of objects to local storage. 
    const [values, setValues] = useState({
       // artcle: should be equal blog title,
        lastName: '',
        email: '',
    });

    const addToArray =(e)=> {
        e.preventDefault()
        console.log(e.target);
    }

    return (
        <div>
            <form>
            <input type="text" onChange={(e)=> console.log(e.target.value)}/>
            <button type="submit" onClick={addToArray}>I submit</button>
            
            </form>
        </div>
    )
}