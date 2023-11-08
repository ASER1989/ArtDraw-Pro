import React, { useEffect, useState } from 'react';
import { Excalidraw, Footer } from "@excalidraw/excalidraw";
import './app.styl';
import {
    BinaryFileData,
    ExcalidrawImperativeAPI,
    PointerDownState as ExcalidrawPointerDownState
} from "@excalidraw/excalidraw/types/types";
import test from './mocks/test.json';
import Sidebar from "@client/components/sideBar";


export default function App() {
    const [docked, setDocked] = useState(true);
    const [loading, setLoading] = useState(true);
    const [
        excalidrawAPI,
        setExcalidrawAPI
    ] = useState<ExcalidrawImperativeAPI | null>(null);

    useEffect(() => {
        console.log(excalidrawAPI);
    }, [excalidrawAPI]);

    const handleContentChange = (event: any) => {
        console.log(test);
    }

    const handleShowSidebar = () => {
        // excalidrawAPI?.updateScene(test)
    }

    return (
        <Excalidraw initialData={{
            appState: {
                openSidebar: {
                    name: 'history'
                }
            }
        }}
            ref={(api: ExcalidrawImperativeAPI) => setExcalidrawAPI(api)}
        >
            <Sidebar/>

            <Footer />
        </Excalidraw>
    );
}