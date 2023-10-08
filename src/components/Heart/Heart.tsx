import { useState, BaseHTMLAttributes } from 'react';
import heart from "./../../assets/heart_original.png";
import heart_active from "./../../assets/heart_active.png";
import heart_hover from "./../../assets/heart_hover.png";
import heart_disabled from "./../../assets/heart_disabled.png";

interface HeartProps {
    disabled: boolean
}

type CustomHeart = BaseHTMLAttributes<HTMLBaseElement> & HeartProps;

export const Heart = ({ disabled, ...props }: CustomHeart) => {
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (!disabled) {
            setClicked((prevClicked) => !prevClicked);
        }
    };

    return (
        <img
            src={disabled ? heart_disabled : (clicked ? heart_active : (hovered ? heart_hover : heart))}
            alt=""
            className={`w-16 h-16 cursor-pointer`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
        />
    );
};
