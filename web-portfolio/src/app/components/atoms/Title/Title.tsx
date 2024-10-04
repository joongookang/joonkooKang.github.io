"use client";
import { useCallback, useEffect, useState } from "react";

interface TitleProps {
    children?: React.ReactNode;
    color: string;
    fontSize: string;
}

/**HomeSubTitleテキスト */
export const Title = ({ children, color, fontSize }: TitleProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const checkVisibility = useCallback(() => {
        const titleElement = document.getElementById(`title-${children}`);
        if (titleElement) {
            const rect = titleElement.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setIsVisible(true);
            }
        }
    }, [children]);

    useEffect(() => {
        checkVisibility(); // ページ読み込み時にチェック
        window.addEventListener("scroll", checkVisibility);
        return () => {
            window.removeEventListener("scroll", checkVisibility);
        };
    }, [checkVisibility]);

    return (
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <h3
                id={`title-${children}`}
                className={`font-bold ${fontSize} transition-transform duration-500 ease-in-out ${color} ${isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                    }`}
            >
                {children}
            </h3>
        </div>
    );
};
