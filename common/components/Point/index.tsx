
const Point = (props : any) => {
    return (
       <span className="w-8 h-8 rounded-md bg-blue-800 flex items-center justify-center text-white" >
          {props.children}
       </span>
    )
}

export default Point