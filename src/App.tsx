import { useEffect, useRef } from 'react';
import { Game } from './game';

function App() {
    const canvasGame = useRef(null);
    const canvasBackground = useRef(null);

    useEffect(() => {
        const game = new Game(
            canvasGame.current as any,
            canvasBackground.current as any,
            782,
            782,
        );

        game.start();

        return () => {
            game.stop();
            console.clear();
        };
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <canvas style={{ position: 'absolute', zIndex: 2, top: 0, left: 0 }} ref={canvasGame}></canvas>
            <canvas style={{ position: 'absolute', zIndex: 1, top: 0, left: 0 }} ref={canvasBackground}></canvas>
        </div>
    );
}

export default App;
