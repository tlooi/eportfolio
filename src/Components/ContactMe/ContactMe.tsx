import { DetailedHTMLProps, InputHTMLAttributes, LegacyRef, MutableRefObject, useRef } from 'react';
import SectionHeader from '../SectionHeader';

import './ContactMe.css';

function ContactMe() {
    const subjectInput = useRef<HTMLInputElement | null>(null);
    const nameInput = useRef<HTMLInputElement | null>(null);
    const messageInput = useRef<HTMLTextAreaElement | null>(null);
    
    function sendEmail() {
        const subject = subjectInput.current?.value;
        const name = nameInput.current?.value;
        const message = messageInput.current?.value
        console.log(subject, name, message);

        
        window.open(`mailto:${'t@looi^outlook@com'.replaceAll('@', '.').replaceAll('^', '@')}?subject=${name} - ${subject}&body=${message?.replaceAll('\n', '%20%0A')}`)
    }

    return (
        <section className='container'>
            <SectionHeader content='Contact Me' id='contactMe' />
            <div className='contact-me-area'>
                <label htmlFor="name">Name</label>
                <input ref={nameInput} className='contact-me-input' type="text" id='name' minLength={1} />
                <label htmlFor="subject">Subject</label>
                <input ref={subjectInput} className='contact-me-input' type="text" id='subject' minLength={1} />
                <label htmlFor="message">Message</label>
                <textarea ref={messageInput} className='contact-me-input' id='message' minLength={1} />
                <button id='contact-me-send' onClick={sendEmail}>Send</button>
            </div>
        </section>
    );
}

export default ContactMe;