import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Market Place`;
        } else {
            document.title = 'Market Place | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
