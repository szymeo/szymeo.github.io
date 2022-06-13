import { useEffect, useRef } from 'react';
// @ts-ignore
import bgImg from './baner_czaszeczka.png';
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
        <div style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            background: `url(${bgImg})`,
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <canvas style={{ position: 'absolute', zIndex: 2 }} ref={canvasGame}></canvas>
            <canvas style={{ position: 'absolute', zIndex: 1 }} ref={canvasBackground}></canvas>
        </div>
    );
}

export default App;
