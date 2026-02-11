import Titel from '@/components/Titel';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <Titel>Welcome To About</Titel>

            <nav className='space-x-5 p-5 text-xl'>
                <Link href={"/about/contact"}>Contact</Link>
                <Link href={"/about/teams"}>Teams</Link>
            </nav>
        </div>
    );
};

export default About;