import React, { useRef, useEffect } from 'react';
import WebViewer from "@pdftron/webviewer";
import { Document } from "react-pdf"; 
import { useLocation } from 'react-router-dom';

const Resume = () => {

    const viewer = useRef(null);

    useEffect(() => {
        WebViewer(
            {
                path: 'webviewer/lib',
                initialDoc: '/files/pdftron_about.pdf',
            },
            viewer.current, 
        ).then((instance) => {
            const { docViewer } = instance;
        });
    }, []);

    return (
        <div className="MyComponent">
          <div className="header">React sample</div>
          <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
        </div>
      );
    // const location = useLocation()
    // const viewerDiv = useRef<HTMLDivElement>(null);
    
    // useEffect(() => {
    //     WebViewer({ path: 'lib', initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf' 
    // }, viewerDiv.current as HTMLDivElement).then(instance => {

    //     });
    // }, [])

    // return (
    //     <div className="webviewer" ref={viewerDiv}>
    //             {/* <Document file="../../resume2.pdf" />         */}
    //     </div>
    
}

export default Resume;
