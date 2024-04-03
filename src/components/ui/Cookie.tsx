"use client"
import React, { useState, useEffect } from 'react';
import { hasCookie, setCookie } from "cookies-next";

function CookiesPopup() {
    const [showConsent, setShowConsent] = useState(true);

    useEffect(() => {
        setShowConsent(!hasCookie("localConsent"));
    }, []);

    const acceptCookie = () => {
        setShowConsent(true);
        setCookie("localConsent", "true", {});
    };

    if (!showConsent) {
        return null;
    }

    return (
        <div className="fixed inset-x-0 bottom-0 z-10 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8">
            <p className="max-w-4xl text-sm leading-6 text-gray-900">
                This website uses cookies to enhance your browsing experience, analyze site
                traffic, and serve better user experiences. By continuing to use this site,
                you consent to our use of cookies. Learn more in our{" "}
                <a className="font-semibold text-teal-600" href="/privacy">
                    cookie policy
                </a>
                .
            </p>
            <div className="mr-16 flex flex-none items-center gap-x-5">
                <button
                    type="button"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    onClick={acceptCookie}
                >
                    Accept all 🍪
                </button>
                <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                >
                    Reject all
                </button>
            </div>
        </div>
    );
}

export default CookiesPopup;
