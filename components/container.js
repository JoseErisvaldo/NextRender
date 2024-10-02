
export default function Container ({children}) {
    return(
        <>
            <hr></hr>
            <div className='bg-slate-600 m-5 text-white p-3'>
                {children}
            </div>
        </>
    )
}