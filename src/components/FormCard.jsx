import { useEffect } from "react"
import { useForm } from "react-hook-form"

const FormCard = ({createCar,updateInfo}) => {
    const{register,handleSubmit,reset}=useForm()
    useEffect(() => {
      reset(updateInfo)
    }, [updateInfo])
    
    const submit=(data)=>{
        console.log(data)
        createCar('/cars/',data)
        
    }
  return (
    <form onSubmit={handleSubmit(submit)}>
        <h2>Creae new car</h2>
        <div>
            <label htmlFor="model">Model</label>
            <input {...register('model')} type="text" id="model"/>
        </div>
        <div>
            <label htmlFor="brand">Brand</label>
            <input {...register('brand')} type="text"id="brand"/>
        </div>
        <div>
            <label htmlFor="color">Color</label>
            <input {...register('color')} type="text" id="color"/>
        </div>
        <div>
            <label htmlFor="year">Year</label>
            <input {...register('year')} type="number"id="year" />
        </div>
        <div>
            <label htmlFor="price">Price</label>
            <input {...register('price')} type="text" id="price" />
        </div>
        <button>Create</button>
    </form>
  )
}

export default FormCard