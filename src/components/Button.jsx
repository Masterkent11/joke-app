import React, {useState} from 'react';

const Button = () => {
const [like, setLike] = useState(Math.floor(Math.random(100)*200));
const [dislike, setDislike] = useState(Math.floor(Math.random(100)*10));
// Math.floor(Math.random(100)*200)
const [likeActive, setLikeActive] = useState(false);
const [dislikeActive, setDislikeActive] = useState(false);

const likeF =()=>{
 if(likeActive){
    setLikeActive(false)
    setLike(like-1)
 }
 else if(likeActive<0){
    alert('Invalid')
 }
 else{
    setLikeActive(true)
    setLike(like+1)

    if(dislikeActive){
        setDislikeActive(false)
        setLike(like+1)
        setDislike(dislike-1)
    }
 }
}
const DislikeF =()=>{
    if(dislikeActive){
       setDislikeActive(false)
       setDislike(dislike-1)
    }
    else{
        setDislikeActive(true)
        setDislike(dislike+1)
   
       if(likeActive){
           setLikeActive(false)
           setDislike(dislike+1)
           setLike(like-1)
       }
    }
   }

    return (
        <div>
            <div id='cardBtn'>
                <button className='likeBtn'  onClick={likeF} >Like {like}</button>
                <button className='likeBtn' onClick={DislikeF}>Dislike {dislike}</button>
            </div>
        </div>
    );
};

export default Button;