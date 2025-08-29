export default function Input({className , type , value , placeholder , handleInput}){
    return (
        <div>
            <input onChange={handleInput} className={className} type={type} value={value} placeholder={placeholder}/>
        </div>
    )
}