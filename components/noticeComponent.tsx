export default function Notice(props:any){
    return (
       <div className="italic rounded p-2 bg-gray-100 border border-red-200 text-black" >
           {props.children}
           </div>
    )

}