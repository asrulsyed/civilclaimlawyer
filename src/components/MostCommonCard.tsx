type props = {
    item: any,
    className?: string,
}

const MostCommonCard = ({ item, className = "" }: props) => {
    return (
        <>
            <div className={`rounded-[2px] border shadow-sm flex flex-col items-center gap-10 p-16 ${className}`}>
                <img src={`/icons/${item.picture_id}`} className="w-[120px] h-[150px]"></img>
                <h2 className="text-2xl font-bold text-color3">{item.name}</h2>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-xl font-light">{item.category1}</p>
                    
                </div>
            </div>
        </>
    )
}

export default MostCommonCard;