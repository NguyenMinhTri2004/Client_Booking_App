const SectionTitle = (props : any) => {
    return (
        <div className="section__title text-2xl font-bold mt-10 flex justify-between items-center text-black">
             {props.children}
        </div>
    )
}

export default SectionTitle