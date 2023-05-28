import { useEffect, useState } from 'react';
import microphoneicon from '../assets/microphone.png'
import '../styles/button.css'



declare global {
    interface Window {
        SpeechRecognition: any,
        webkitSpeechRecognition: any,
        mozSpeechRecognition: any,
        msSpeechRecognition: any
    }
}
const SpeechRecognitionComponent: React.FC = () => {
    const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
    const [resulText, setResultText] = useState("")


    useEffect(() => {
        const recognition = new (window.SpeechRecognition ||
            window.webkitSpeechRecognition ||
            window.mozSpeechRecognition ||
            window.msSpeechRecognition)();

        recognition.lang = 'en-US';
        recognition.continuous = true;

        recognition.onresult = (event: any) => {
            const transcript = event.results[event.results.length - 1][0].transcript;
            setResultText(transcript)
        };

        recognition.onerror = (event: any) => {
            console.error('Recognition Error:', event.error);
        };

        if (isButtonActive) {
            recognition.start();
        } else {
            recognition.stop();
        }
        // Clean up the recognition instance when the component unmounts
        return () => {
            recognition.stop();
        };
    }, [isButtonActive]);


    return (
        <div className='my-[100px] p-3 flex flex-col items-center'>
            <h1 className='font-bold mt-[30px] text-2xl'>Convert your voice into text in seconds</h1>
            <button onMouseDown={() => setIsButtonActive(!isButtonActive)}><img src={microphoneicon} className='my-[60px]' alt='Mirophone' /></button>
            <p  className="border-[2px] rounded w-full min-h-[20vh] ">{resulText}</p>
        </div>
    )
}

export default SpeechRecognitionComponent;