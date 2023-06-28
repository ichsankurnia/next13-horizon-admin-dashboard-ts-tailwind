import { useEffect, useState } from 'react';

const useMobileView = () => {
    const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1366);

    function handleWindowSizeChange() {
        setWidth(window?.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return { 
        isMobile: width <= 768, 
        windowWidth: width 
    };
}

export default useMobileView;