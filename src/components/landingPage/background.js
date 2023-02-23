const background=(props)=>{
    return (
        <div className="w-full md:h-[100vh] h-max bg-[#42c4f8] flex items-center justify-center">
            {props.children}
        </div>
    )
}
export default background