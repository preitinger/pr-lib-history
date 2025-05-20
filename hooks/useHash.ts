'use client'

import { useState, useEffect } from "react";
import { productionOrDebugConsole as console } from "@/app/_lib/i18n/client";

export default function useHash(onHashChange: (newHash: string) => void) {
    const [hash, setHash] = useState<string>('');

    useEffect(() => {
        function handleHashChange() {
            console.debug('event hashchange', location.hash);
            const newHash = location.hash;
            setHash(newHash);
            onHashChange(newHash);
        }
        setHash(window.location.hash);
        window.addEventListener('hashchange', handleHashChange)

        return () => {
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [onHashChange])

    return hash;
}
