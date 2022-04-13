export default function Message({items}) {
const{task,key}=items;
function removeItem(id){
    console.log(id);
}
        return (
            <div className=" flex justify-between shadow-sm ml-auto mr-auto p-1 uppercase  bg-gray-100 w-72 mt-2 font-[Poppins] ">
                <h1 className="text-black">{items.task}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={removeItem(items.key)} className="h-6 w-6 cursor-pointer text-white bg-rose-500 hover:text-rose-500 hover:bg-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </div>
            )
    }
   
