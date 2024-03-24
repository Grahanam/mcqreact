import { Link } from "react-router-dom"

const Home=()=>{

    return(
        <>
        <h1>Welcome</h1>
        <Link to='/mcq'>
            <button>Start MCQ !</button>
        </Link>
        
        
        </>
    )
}

export default Home