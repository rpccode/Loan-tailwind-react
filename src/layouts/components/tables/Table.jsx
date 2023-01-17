export const Table = ({ header = [], children }) => {

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        {header.map(head => (
                            <th key={head} scope="col">{head}</th>
                        ))}
                    </thead>
                    <tbody>
                        {children}
                    </tbody>
                </table>
            </div>
        </>
    )
}