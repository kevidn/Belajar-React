'use client';

import { useState } from 'react';

export default function LikeButton() {

    // Component state untuk memperlihatkan berapa kali button di-klik.
    const [likes, setLikes] = useState(0);

    // Function untuk meng-handle respon button setelah di-klik.
    function handleClick(){
        setLikes(likes + 1);
    }

    return <button onClick={handleClick}>Likes = ({likes})</button>;
}