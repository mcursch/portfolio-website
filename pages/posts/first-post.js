import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Typewriter from 'typewriter-effect'

export default function FirstPost() {
    return (
        <>
        <Head>
            <title>first post</title>
        </Head>
        <Script 
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() => 
                console.log('script loaded correctly, window.FB has been populated')
            }/>
        <h1 className="bg-black text-white">First Post</h1>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
{/*         
        <div className="typingbody">
          <div className="typingcontainer">
            <span className="typingtext typingsecondtext">hello</span> 
          </div>

        </div> */}
        {/* <div className="testThing">hello world</div> */}

        <div className="testThing">
            <Typewriter
                className="testThing"
                options = {{
                    strings: ['Hello', 'World'],
                    autoStart: true,
                    loop: true
                }}
            />


        </div>
    
    

    </>
    );
}
