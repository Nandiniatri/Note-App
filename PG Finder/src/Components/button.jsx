export default function Button({children , handleClick , className , style}){
    return (
        <div>
            <button style={{style}} className={className} onClick={handleClick}>{children}</button>
        </div>
    )
}