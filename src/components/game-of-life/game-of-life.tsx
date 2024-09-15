'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './game-of-life.module.css';

type Cell = 0 | 1;
type Game = Cell[][];

const GameOfLife = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [running, setRunning] = useState(false);
  const [game, setGame] = useState<{
    prev: Game | undefined;
    current: Game | undefined;
  }>({
    prev: undefined,
    current: undefined,
  });
  const [{ width, height }, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (!ref.current) return;

      ref.current.style.opacity = '0';
      setRunning(false);

      setDimensions({
        width: Math.floor(window.innerWidth / 10),
        height: Math.floor(window.innerHeight / 10),
      });

      timeoutRef.current = setTimeout(() => {
        if (!ref.current) return;
        ref.current.style.opacity = '1';
        ref.current.width = window.innerWidth;
        ref.current.height = window.innerHeight;
        setRunning(true);
      }, 1000);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const generateRandomGame = useCallback(() => {
    if (!width || !height) return;

    const newGame = Array.from({ length: height }, () =>
      Array.from(
        { length: width },
        () => Math.round(Math.random() - 0.35) as Cell
      )
    );

    setGame({
      prev: newGame,
      current: newGame,
    });
  }, [width, height]);

  const calculateNextGeneration = useCallback(() => {
    setGame(prev => {
      const current = prev.current;

      if (!current) return prev;

      const newGame: Game = Array.from({ length: height }, () =>
        Array.from({ length: width }, () => 0 as Cell)
      );

      for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
          const neighbors = [
            current[i - 1]?.[j - 1],
            current[i - 1]?.[j],
            current[i - 1]?.[j + 1],
            current[i]?.[j - 1],
            current[i]?.[j + 1],
            current[i + 1]?.[j - 1],
            current[i + 1]?.[j],
            current[i + 1]?.[j + 1],
          ].filter(cell => cell === 1).length;

          if (current[i][j] === 1) {
            newGame[i][j] = neighbors === 2 || neighbors === 3 ? 1 : 0;
          } else {
            newGame[i][j] = neighbors === 3 ? 1 : 0;
          }
        }
      }

      return {
        prev: current,
        current: newGame,
      };
    });
  }, [width, height]);

  const generateTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!running) return;
    generateRandomGame();
  }, [generateRandomGame, running]);

  useEffect(() => {
    generateTimeoutRef.current = setInterval(() => {
      calculateNextGeneration();
    }, 250);

    return () => {
      if (generateTimeoutRef.current) clearInterval(generateTimeoutRef.current);
    };
  }, [calculateNextGeneration]);

  useEffect(() => {
    if (!game.current || !game.prev || !ref.current || !running) return;

    const ctx = ref.current.getContext('2d');

    if (!ctx) return;

    ctx.clearRect(0, 0, ref.current.width, ref.current.height);

    const cellSize = 10;

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (game.prev[i][j] === 1) {
          ctx.fillStyle = '#f5f5f5';
          ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
        }
        if (game.current[i][j] === 1) {
          ctx.fillStyle = '#eeeeee';
          ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
        }
      }
    }
  }, [game, width, height, running]);

  return (
    <div className={styles.wrapper}>
      <canvas
        style={{ transition: 'opacity 1s', opacity: 0, position: 'absolute' }}
        ref={ref}
      />
      <div className={styles.content}>
        <div className={styles.main}>
          <h1 className={styles.code}>404</h1>
          <p className={styles.text}>A keresett oldal nem található</p>
        </div>
        <p className={styles.description}>
          Vissza a{' '}
          <Link
            className={styles.link}
            href='/'
          >
            főoldalra
          </Link>
        </p>
      </div>
    </div>
  );
};

export { GameOfLife };
