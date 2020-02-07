import { useEffect, useState } from 'react';

const testCategories = [
    {
        "catID": "fortnut",
        "name": "FortNite",
        "imgUrl" : "https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fchapter-2-season-2-update%2F11BR_Evergreens_Blue_NewsHeader-1920x1080-77ade2f5f2bc0312b4978dcd7639adfe00211fe6.jpg" 
    },
    {
        "catID": "cod",
        "name": "Call Of Duty",
        "imgUrl" : "https://m.media-amazon.com/images/M/MV5BMzc2MzEzNjc4OV5BMl5BanBnXkFtZTgwOTQ4MTI1NjM@._V1_UY1200_CR90,0,630,1200_AL_.jpg" 
    }
]

export default function useCategories() {

    const [categories, setCategories] = useState();

    useEffect(() => {
        setCategories(testCategories);
        console.log('called');
    }, [categories]);

    return categories;
}