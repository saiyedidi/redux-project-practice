import { useState } from "react"
import { useDispatch } from "react-redux"
const Form = () => {
    let dispatch = useDispatch()
    const [amount, setAmount] = useState("")
    const [fullname, setFullName] = useState("")
    const [mobile, setMobile] = useState(null)
    return (
        <>
            <div className="container">
                <h2 className="text-primary">Form</h2>
                <div className="row">
                    <div className="col-4">
                        <input className="form-control"
                            type="text"
                            placeholder="Enter Amount"
                            value={amount}
                            onChange={(e) => {
                                let data = e.target.value
                                setAmount(data)
                            }}
                        />
                    </div>
                    <button className="btn col-1" onClick={() => {
                        dispatch({ type: 'deposit', payload: amount })
                        setAmount('')
                    }}>Deposit</button>

                    <button className="btn btn-danger mx-2 col-1" onClick={() => {
                        dispatch({ type: 'withdraw', payload: amount })
                        setAmount('')
                    }}>Withdraw</button>

                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <input className="form-control"
                            type="text"
                            placeholder="Enter Name"
                            value={fullname}
                            onChange={(e) => {
                                let data = e.target.value
                                setFullName(data)
                            }}
                        />
                    </div>
                    <button className="btn btn-primary col-1" onClick={() => {
                        dispatch({ type: 'nameUpdate', payload: fullname })
                        setFullName('')
                    }}>Update</button>

                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <input className="form-control"
                            type="number"
                            placeholder="Enter Number"
                            value={mobile}
                            onChange={(e) => {
                                let data = e.target.value
                                setMobile(data)
                            }}
                        />
                    </div>
                    <button className="btn btn-primary col-1" onClick={() => {
                        dispatch({ type: 'mobileUpdate', payload: mobile })
                        setMobile('')
                    }}>Update</button>

                </div>
                <button className="btn btn-danger mt-2 col-1" onClick={() => {
                        dispatch({ type: 'reset'})
                        
                    }}>Reset</button>
            </div>
        </>
    )
}
export default Form