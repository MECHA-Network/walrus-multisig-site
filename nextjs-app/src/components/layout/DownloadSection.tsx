// components/DownloadSection.js
import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
const DownloadSection = () => {
    const googleDriveLink = "https://drive.google.com/uc?export=download&id=1rm87AW4sLdwGQbEh8Wxv0JJ6don3HtQ4"; // Replace with your Google Drive file link

    return (
        <div className="flex items-center justify-center">
            <div className="text-center bg-white/10 p-4 rounded-2xl shadow-lg backdrop-blur-md">
                <h2 className="text-4xl font-bold text-white mb-2">Download Side Pannel Extension</h2>
                <a
                    href={googleDriveLink}
                    className="btn btn-outline btn-accent btn-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* Download Now */}
                    <ArrowDownTrayIcon className="h-6 w-6 mx-auto" />
                    
                </a>
            </div>
        </div>
    );
}

export default DownloadSection;
