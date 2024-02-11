export const Button = ({ action, text, color='blue'}:{
    action: any
    text: string
    color?: 'red' | 'green' | 'yellow' | 'blue'
}) => {
    return <button 
    onClick={() => action()} 
    className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`}>
        {text}</button>
}