
export default function SelectCategory(){
    return <div className="mt-4">
        <header className="flex items-center w-full justify-between">
            <h1 className="text-2xl">Cateory</h1>
            <p className="text-l">See all</p>
        </header>
        {/* First four categories and add animation on btn when changing to new category*/}
        <div className="mt-2 flex justify-between">
            <div className="w-20 h-8 btnBg flex justify-center items-center rounded-2xl">All</div>
            {Array.from({length: 3}, (_, i) => (
                <div key={i} className="w-20 h-8 secBtnBg flex justify-center items-center rounded-2xl">All</div>
            ))}
        </div>
    </div>
}