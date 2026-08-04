import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { cn } from '@/shared/utils/cn';

export function HorseGame() {
  const intl = useIntl();
  const initial = useRef(createBoard()).current;
  const [board, setBoard] = useState<Cell[][]>(initial.board);
  const [horse, setHorse] = useState<Pos>(initial.horse);
  const [fenceCount, setFenceCount] = useState<number>(0);
  const [status, setStatus] = useState<'playing' | 'trapped' | 'escaped'>('playing');
  const [best, setBest] = useState<number | null>(null);

  const reset = useCallback(() => {
    const fresh = createBoard();
    setBoard(fresh.board);
    setHorse(fresh.horse);
    setFenceCount(0);
    setStatus('playing');
  }, []);

  const onCellClick = (r: number, c: number) => {
    if (status !== 'playing') return;
    if (board[r][c] !== 'empty') return;
    if (r === horse.r && c === horse.c) return;

    const next = board.map((row) => row.slice());
    next[r][c] = 'fence';
    const newFences = fenceCount + 1;

    const moves = validMoves(next, horse);
    if (moves.length === 0) {
      setBoard(next);
      setFenceCount(newFences);
      setStatus('trapped');
      setBest((b) => (b === null ? newFences : Math.min(b, newFences)));
      return;
    }

    const target = pickHorseMove(moves);
    const onEdge = target.r === 0 || target.r === SIZE - 1 || target.c === 0 || target.c === SIZE - 1;

    next[horse.r][horse.c] = 'empty';
    next[target.r][target.c] = 'horse';

    setBoard(next);
    setHorse(target);
    setFenceCount(newFences);

    if (onEdge) {
      const escapeOptions = KNIGHT_MOVES.some(([dr, dc]) => {
        const nr = target.r + dr;
        const nc = target.c + dc;
        return nr < 0 || nr >= SIZE || nc < 0 || nc >= SIZE;
      });
      if (escapeOptions) setStatus('escaped');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-3xl px-4 pt-24 sm:px-6 lg:px-8"
    >
      <Link
        to="/playground"
        className="link-underline inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        ← {intl.formatMessage({ id: 'nav.playground' })}
      </Link>
      <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">{intl.formatMessage({ id: 'horse.title' })}</h1>
      <p className="mt-3 text-muted-foreground">{intl.formatMessage({ id: 'horse.subtitle' })}</p>

      <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        <div>
          {intl.formatMessage({ id: 'horse.fences' })}: <span className="text-foreground">{fenceCount}</span>
        </div>
        <div>
          {intl.formatMessage({ id: 'horse.best' })}: <span className="text-foreground">{best ?? '—'}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={reset}
          className="ml-auto rounded-sm border-border bg-surface text-foreground hover:border-border-strong"
        >
          {intl.formatMessage({ id: 'horse.new' })}
        </Button>
      </div>

      <div className="relative mt-8 inline-block w-full">
        <div className="mx-auto grid aspect-square w-full max-w-md grid-cols-8 gap-[2px] rounded-sm border border-border bg-border p-[2px]">
          {board.map((row, r) =>
            row.map((cell, c) => {
              const isLight = (r + c) % 2 === 0;
              return (
                <button
                  key={`${r}-${c}`}
                  type="button"
                  onClick={() => onCellClick(r, c)}
                  className={cn(
                    'relative aspect-square overflow-hidden transition-smooth',
                    isLight ? 'bg-[#18181b]' : 'bg-[#1f1f23]',
                    cell === 'empty' && status === 'playing' && 'hover:bg-[#27272a] cursor-pointer'
                  )}
                  aria-label={`cell ${r}-${c}`}
                >
                  <AnimatePresence>
                    {cell === 'fence' && (
                      <motion.span
                        key="fence"
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                        className="absolute inset-1 rounded-[1px] bg-[var(--border-strong)]"
                      />
                    )}
                    {cell === 'horse' && (
                      <motion.span
                        key="horse"
                        layoutId="horse-piece"
                        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                        className="absolute inset-0 flex items-center justify-center text-2xl"
                      >
                        ♞
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              );
            })
          )}
        </div>
      </div>

      <AnimatePresence>
        {status !== 'playing' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-8 rounded-sm border border-border bg-surface p-6 text-center"
          >
            <div className="text-2xl font-bold">
              {status === 'trapped'
                ? intl.formatMessage({ id: 'horse.trapped' })
                : intl.formatMessage({ id: 'horse.escaped' })}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {fenceCount} {intl.formatMessage({ id: 'horse.fences' }).toLowerCase()}
            </div>
            <Button onClick={reset} className="mt-4 rounded-sm">
              {intl.formatMessage({ id: 'horse.new' })}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

type Cell = 'empty' | 'fence' | 'horse';
const SIZE = 8;
const KNIGHT_MOVES: Array<[number, number]> = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

interface Pos {
  r: number;
  c: number;
}

function createBoard(): { board: Cell[][]; horse: Pos } {
  const board: Cell[][] = Array.from({ length: SIZE }, () => Array(SIZE).fill('empty') as Cell[]);
  const r = 2 + Math.floor(Math.random() * 4);
  const c = 2 + Math.floor(Math.random() * 4);
  board[r][c] = 'horse';
  return { board, horse: { r, c } };
}

function validMoves(board: Cell[][], horse: Pos): Pos[] {
  const out: Pos[] = [];
  for (const [dr, dc] of KNIGHT_MOVES) {
    const nr = horse.r + dr;
    const nc = horse.c + dc;
    if (nr < 0 || nr >= SIZE || nc < 0 || nc >= SIZE) continue;
    if (board[nr][nc] === 'fence') continue;
    out.push({ r: nr, c: nc });
  }
  return out;
}

function pickHorseMove(moves: Pos[]): Pos {
  return moves.reduce((best, m) => {
    const distBest = Math.min(best.r, SIZE - 1 - best.r, best.c, SIZE - 1 - best.c);
    const distM = Math.min(m.r, SIZE - 1 - m.r, m.c, SIZE - 1 - m.c);
    return distM < distBest ? m : best;
  });
}
