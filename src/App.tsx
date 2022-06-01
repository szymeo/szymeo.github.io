import { useEffect, useRef } from 'react';
import { Game } from './game';

function App() {
    const canvas = useRef(null);

    useEffect(() => {
        const game = new Game(canvas.current as any, 600, 600);

        game.start();

        return () => {
            game.stop();
        };
    }, []);

    return (
        <div className="App">
            <canvas style={{ border: '1px solid hotpink' }} ref={canvas}></canvas>
        </div>
    );
}

export default App;
