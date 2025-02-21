import { useEffect, useRef } from 'react';
// @ts-ignore
import styles from './App.module.css';
import { Game } from './game';

function App() {
    const canvasGame = useRef(null);
    const canvasBackground = useRef(null);

    useEffect(() => {
        const game = new Game(
            canvasGame.current as any,
            canvasBackground.current as any,
        );

        game.start();

        return () => {
            game.stop();
            console.clear();
        };
    }, []);

    return (
        <div className={styles.gameWrapper}>
            <div className={styles.game}>
                <canvas
                    style={{
                        borderRadius: '2px',
                        position: 'absolute',
                        zIndex: 2,
                        boxShadow: 'rgb(255 255 255 / 30%) 0px 8px 20px 0px',
                    }}
                    ref={canvasGame}></canvas>
                <canvas
                    style={{
                        borderRadius: '2px',
                        position: 'absolute',
                        zIndex: 1,
                        boxShadow: 'rgb(255 255 255 / 54%) 0px 8px 20px 0px',
                    }}
                    ref={canvasBackground}></canvas>
            </div>
        </div>
    );
}

export default App;
