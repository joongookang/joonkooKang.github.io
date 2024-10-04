"use client";
import { useEffect, useState } from 'react';

const ReadingProgress = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;
            const winHeight = window.innerHeight || document.documentElement.clientHeight;
            const docHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
            const scrolled = (scrollY / (docHeight - winHeight)) * 100;
            setScrollPercent(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 z-50 left-0 w-full h-1 bg-gray-300">
            <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500" style={{ width: `${scrollPercent}%` }}></div>
        </div>
    );
};

export default ReadingProgress;