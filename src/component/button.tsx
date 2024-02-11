export const Button = ({ action, text, color }: {
    action: any
    text: string
    color: number
}) => {
    console.log(color)
    const colorList = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-emerald-500', 'bg-green-500']
    //const l = Math.floor(Math.random() * 4)
    //const colorSelected = colorList[Math.floor(Math.random() * 4)]
    const colorSelected = colorList[typeof color == 'number' ? color : 0]
    //console.log(colorSelected,text,color)
    const css  = `${colorSelected} hover:${colorSelected} text-black font-bold py-2 px-4 rounded`
    //console.log(css)
    return <button onClick={() => action()} className={`${colorSelected} hover:${colorSelected} text-black font-bold py-2 px-4 rounded`}>{text}</button>
}