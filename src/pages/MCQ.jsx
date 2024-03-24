import { useState } from "react"
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"


const question=[
    {
        question:"Why was the JavaScript developer sad?",
        options:['Because he didn\'t get closure','Due to a broken promise','His code kept returning undefined feelings','All of the above'],
        answer:3
    },
    {
        question:"How do you comfort a JavaScript bug",
        options:['Wrap it in a try-catch block','Offer it a debugger to talk to','Give it some warm coffee to console','Just ignore it and hope it goes away'],
        answer:2
    },
    {
        question:"Why did the CSS file break up with the HTML file?",
        options:['They couldn\'t align their styles','HTML was too div-oriented','CSS was too controlling','Because JavaScript came between them'],
        answer:2
    },
    {
        question:"How does a programmer apologize?",    
        options:['By saying "Sorry, my code\'s buggy"','With a commit message: "Fixed it... I think"',' By sending a bouquet of flowers.exe','None, they just blame it on the compiler'],
        answer:1
    }
]
const MCQ=()=>{
    const navigate=useNavigate()
    const arr=Array(question.length).fill(-1)
    const [current,setCurrent]=useState(0)
    const [useranswer,setuseranswer]=useState([...arr])
    
    function selectanswer(ques,ans){
        let arr=[...useranswer]
        arr[ques]=ans
        setuseranswer(arr)
    }
    function prev(){
       if(current>0){
           setCurrent(current-1)
       }
    }
    function next(){
        if(current<question.length-1){
           setCurrent(current+1)
        }

    }
    function getscore(){
        let i=0
        let score=0
        while(i<question.length){
            if(useranswer[i]==-1){
                alert('Please attempt all Questions !')
                return 
            }
            if(useranswer[i]==question[i].answer)score++

            i++
        }
        alert("Your Final Score: "+ score +" out of "+ question.length)
        navigate('/')
    }

    return(
        <>
        <div class="progress-border">Question : {current+1}</div>
           
           <h3>{question[current].question}</h3>
           <div style={{textAlign:'start'}}>
            {
                question[current].options.map((option,index)=>(
                    <div onClick={()=>selectanswer(current,index)} key={index}>
                        <span>
                        {useranswer[current]==index?
                            <i><FontAwesomeIcon icon={faCircleCheck}/> </i>
                            :
                            <i><FontAwesomeIcon icon={faCircle}/> </i>  
                        }
                        
                        </span> 
                         {option}
                    </div>
                ))
            }
             </div>
             <br/>
            
            <div style={{ display:"flex",justifyContent:"space-around",alignItems:"center"}}>
            <button onClick={prev}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button onClick={getscore}>Submit</button>
            <button onClick={next}><FontAwesomeIcon icon={faChevronRight}/></button>
            
            </div>
           
         
        </>
    )
}

export default MCQ