import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react';
import '../../styles.scss';

const useDarkMode = (theme, initialValue) => {
    const [value, setValue] = useLocalStorage(theme, initialValue);

    // const handleChanges = updatedValue => {
    //     setValue(updatedValue);
    // };

    useEffect(() => {
        if (value === true) {
            console.log('dark mode on')
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
            console.log('dark mode off')
        }
    }, [value]);

    return [value, setValue];
}

export default useDarkMode;