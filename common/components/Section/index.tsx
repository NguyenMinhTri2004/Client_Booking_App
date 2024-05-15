const Section = (props : any) => {
    return (
        <div className="section my-5 w-[80%] mx-auto">
             {props.children}
        </div>
    )
}

export default Section