import { useState, useCallback, useMemo, useRef } from 'react';

function DivGrid({
  rows,
  cols,
  cellSize,
  borderColor,
  fillColor,
  clickedCell,
  onCellClick,
  interactive,
  className,
}) {
  const [hoveredCell, setHoveredCell] = useState(null);

  const cells = useMemo(() => {
    const arr = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        arr.push({ row: r, col: c });
      }
    }
    return arr;
  }, [rows, cols]);

  const getDelay = useCallback(
    (row, col) => {
      if (!clickedCell) return null;
      const dist = Math.abs(row - clickedCell.row) + Math.abs(col - clickedCell.col);
      return dist * 40;
    },
    [clickedCell]
  );

  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        gap: 0,
      }}
    >
      {cells.map(({ row, col }) => {
        const delay = getDelay(row, col);
        const isHovered = hoveredCell && hoveredCell.row === row && hoveredCell.col === col;

        return (
          <div
            key={`${row}-${col}`}
            className="cell-ripple-target"
            style={{
              width: cellSize,
              height: cellSize,
              borderRight: `1px solid ${borderColor}`,
              borderBottom: `1px solid ${borderColor}`,
              backgroundColor: isHovered ? fillColor : 'transparent',
              opacity: isHovered ? 0.6 : 0.4,
              transition: 'background-color 0.15s ease, opacity 0.15s ease',
              animation:
                delay !== null
                  ? `cell-ripple 200ms ease-out ${delay}ms both`
                  : 'none',
              cursor: interactive ? 'pointer' : 'default',
            }}
            onClick={() => interactive && onCellClick?.(row, col)}
            onMouseEnter={() => interactive && setHoveredCell({ row, col })}
            onMouseLeave={() => interactive && setHoveredCell(null)}
          />
        );
      })}
    </div>
  );
}

export function BackgroundRippleEffect({ rows = 8, cols = 27, cellSize = 56 }) {
  const [clickedCell, setClickedCell] = useState(null);
  const resetRef = useRef(null);

  const handleCellClick = useCallback((row, col) => {
    setClickedCell({ row, col });
    if (resetRef.current) clearTimeout(resetRef.current);
    resetRef.current = setTimeout(() => setClickedCell(null), 600);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-auto z-0">
      <DivGrid
        rows={rows}
        cols={cols}
        cellSize={cellSize}
        borderColor="rgba(37, 99, 235, 0.06)"
        fillColor="rgba(37, 99, 235, 0.12)"
        clickedCell={clickedCell}
        onCellClick={handleCellClick}
        interactive={true}
      />
    </div>
  );
}

export default BackgroundRippleEffect;
