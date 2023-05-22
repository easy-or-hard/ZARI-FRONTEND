export default function EffectBanzzack({positionX, positionY, r}: { positionX: number, positionY: number, r: number }) {
    return (
        <>
            <defs>
                <radialGradient id="radial-gradient" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#fff"/> {/* 중앙 색상을 밝게 지정 */}
                    <stop offset="1" stopColor="rgba(255, 255, 255, 0)"/> {/* 테두리 색상을 투명으로 지정 */}
                </radialGradient>
            </defs>
            <g>
                <ellipse cx={positionX} cy={positionY} rx={r / 3} ry={r * 3} fill="url(#radial-gradient)"/>
                <ellipse cx={positionX} cy={positionY} rx={r * 3} ry={r / 3} fill="url(#radial-gradient)"/>
                <g transform={`rotate(-45 ${positionX} ${positionY})`}>
                    <ellipse cx={positionX} cy={positionY} rx={r / 3} ry={r * 10} fill="url(#radial-gradient)"/>
                    <ellipse cx={positionX} cy={positionY} rx={r * 10} ry={r / 3} fill="url(#radial-gradient)"/>
                </g>
            </g>
        </>
    )
}