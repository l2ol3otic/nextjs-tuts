'use client';

const Page = () => {
    const itemLists = [
        {id: 1, title: 'apple'},
        {id: 2, title: 'grape'},
        {id: 3, title: 'banana'},
    ]    
    const logger = (fruitName: string) => { 
        alert(`You just click ${fruitName}`)
    }
    return <div className="p-12">
        {/* Title */}
        <h1 className="text-2xl">Hello world</h1>
        <hr className="my-4" />
        <ul className="text-yellow-400 list-disc">
            { itemLists.map((item,index) => <div key={index}>{item.title}</div> ) }
        </ul>
        <hr className="my-4" />
        {/* Table */}
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>item</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                { itemLists.map((item,index) => {
                    const {id , title} = item
                    return <tr key={index}>
                        <td className="border border-white p-2">{id}</td>
                        <td className="border border-white p-2">{title}</td>
                        <td className="border border-white p-2">
                            <button 
                                onClick={() => logger(title)}
                                className="bg-blue-500 text-white rounded-lg px-4 py-2">save</button>
                        </td>
                    </tr>
                }) }
            </tbody>
        </table>
        <hr className="my-4" />
        {/* Debug */}
        <div>{JSON.stringify(itemLists)}</div>
    </div>
}

export default Page

