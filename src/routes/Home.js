import React, { useState } from 'react';

const Home = () => {
    const [review, setReview] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
    };
    const onChange = (event) => {
        const {target: {value}} = event; // event안에 있는 target 안에 있는 value를 가져옴
        setReview(value);
    };
    return (
        <div>
        <form onSubmit={onSubmit}> 
            <input value={review} onchange = {onChange}type="text" placeholder="리뷰 작성칸" maxLength={120}/><br/>
            <input type="submit" value = "저장"/>
        </form>
        </div>
    );
};
export default Home;
