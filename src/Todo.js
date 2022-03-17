import React , {useState} from 'react'
import { AllData } from './AllData';

export const Todo = () => {
    const [bioData, setBioData] = useState([]);
    const [bio, setBio] = useState({});
    const [index, setIndex] = useState(null)
    const [state, setState] = useState({
        name: '',
        address: ''
    })
    console.log("mydata" , bioData)
    console.log('index' , index)
    console.log('bio' , bio)
    const onChangeName = (e) => {
        const copy = {...state}
        copy.name = e.target.value;
        setState(copy);
    }
    const onChangeAddress = (e) => {
        const copy = {...state}
        copy.address = e.target.value;
        setState(copy);
    }

    const onSubmitRecord = () =>{
        const newData = [...bioData]
        const obj = {name:state.name, address:state.address}
        if(index === null){
            newData.push(obj)
            setBioData(newData)
            setState({
                name:'',
                address: ''
            })
        }
        else{
            newData.splice(index, 1, obj)
            setBioData(newData)
            setIndex(null)
        }
      
    }

    const deleteRecord = (i) =>{
        const copy = [...bioData]
        copy.splice(i, 1)
        setBioData(copy)
    }

    const editRecord = (i) =>{
        const newdata = bioData.filter(data => data.name === i)
        setBio(newdata)
        setIndex(i)
    //    setState({
    //        name: bioData[i].name,
    //        address:bioData[i].address,
    //    })
       
    }
   return (
    <div  className='form-wrap mt-3'>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Name</label>
      <input type="text" value={state.name} onChange={onChangeName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Address</label>
      <input type="text" value={state.address} onChange={onChangeAddress}  className="form-control" id="exampleInputPassword1" />
    </div>

    <button type="submit" onClick={onSubmitRecord} className="btn btn-primary">Submit</button>

  <div className='all-data mt-3'>
      <table className='table table-hover table-stripped'>
            <thead>
                <th>Name</th>
                <th>Address</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {
                   bioData && bioData.map((data, i)=>{
                        return(
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>{data.address}</td>
                                <td><button onClick={()=>editRecord(i)}>Edit</button></td>
                                <td><button onClick={()=> deleteRecord(i)}> Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
      </table>
  </div>
  </div>
  )
}
