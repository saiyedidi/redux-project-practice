import { useSelector } from "react-redux"
const Account =()=>{
   let data= useSelector((item)=>{
         return item
    })
    return(
        <>
        <div className="container">
            <h2 className="text-primary">Account Details</h2>
            <table className="table table-bordered w-50">
                <thead>
                    <tr>
                        <th>Balance</th>
                        <th>UserName</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.balance}</td>
                        <td>{data.fullName}</td>
                        <td>{data.mobile}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}
export default Account