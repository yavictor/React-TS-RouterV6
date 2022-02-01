import styles from './Button.module.scss';
import React, {ButtonHTMLAttributes} from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    // action: () => void
}

const Button : React.FC<IButtonProps> = ({text = ''}) => {
    return (
        <button className={styles.royalBlue}>{text}</button>
    )
}

export {Button};
