import { useState, useEffect } from "react";

const words = ["Coder", "Programmer", "Developer", "Designer"];

export default function TypeWriter() {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(() => {
            if (!deleting) {
                setText(currentWord.substring(0, text.length + 1));

                if (text.length + 1 === currentWord.length) {
                    setTimeout(() => setDeleting(true), 1200);
                }
            } else {
                setText(currentWord.substring(0, text.length - 1));

                if (text.length === 1) {
                    setDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, deleting ? 60 : 120);

        return () => clearTimeout(timeout);
    }, [text, deleting, wordIndex]);

    return (
        <div className="flex items-center text-amber-400 text-2xl sm:text-3xl font-bold">
            <span>{text}</span>
            <span className="ml-1 h-7 w-[3px] bg-amber-400 animate-pulse" />
        </div>
    );
}