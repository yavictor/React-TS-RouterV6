import styles from './Button.module.scss';

interface ButtonProps {
    text: string;
}

const Button = ({text = ''}: ButtonProps) => {
    return (
        <button className={styles.royalBlue}>{text}</button>
    )
}

export {Button};
