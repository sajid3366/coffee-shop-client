import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdatedCoffee = e =>{
        e.preventDefault();
    
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(updatedCoffee);
    
        fetch(`https://coffee-shop-server-eo88ulseb-ahtesham-sajids-projects.vercel.app/coffee/${_id}`,{
          method: "PUT",
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(updatedCoffee)
    
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.modifiedCount>0){
            Swal.fire({
              title: 'Success!',
              text: 'Coffee Updated successfully',
              icon: 'success',
              confirmButtonText: 'OK'
            })
          }
        })
      }

    return (
        <div className='bg-[#F4F3F0] p-12'>
      <h1 className='text-2xl mb-5'>Coffee Name: {name}</h1>

      <form onSubmit={handleUpdatedCoffee}>
        <div className='flex gap-4 mb-8'>
          <div className='md:w-1/2'>
            <p>Coffee Name</p>
            <input className='border-2 mt-2 border-solid w-full h-[50px]' defaultValue={name} placeholder='Coffee name' type="text" name="name" id="" />

          </div>
          <div className='md:w-1/2'>
            <p>Available Quantity</p>
            <input className='border-2 mt-2 border-solid w-full h-[50px]' defaultValue={quantity} placeholder='Available Quantity' type="text" name="quantity" id="" />

          </div>
        
        </div>
        <div className='flex gap-4 mb-8'>
          <div className='md:w-1/2'>
            <p>Supplier</p>
            <input className='border-2 mt-2 border-solid w-full h-[50px]' defaultValue={supplier} placeholder='Supplier' type="text" name="supplier" id="" />

          </div>
          <div className='md:w-1/2'>
            <p>Taste</p>
            <input className='border-2 mt-2 border-solid w-full h-[50px]' defaultValue={taste} placeholder='Taste' type="text" name="taste" id="" />

          </div>
          
        </div>
        <div className='flex gap-4 mb-8'>
          <div className='md:w-1/2'>
            <p>Category</p>
            <input className='border-2 mt-2 border-solid w-full h-[50px]' defaultValue={category} placeholder='Category' type="text" name="category" id="" />

          </div>
          <div className='md:w-1/2'>
            <p>Details</p>
            <input className='border-2 mt-2 border-solid w-full h-[50px]' defaultValue={details} placeholder='Details' type="text" name="details" id="" />

          </div>
          
        </div>
        <div className='mb-8'>
          <div className='w-full'>
            <p>Photo URL</p>
            <input className='border-2 mt-2 border-solid w-full h-[50px]' defaultValue={photo} placeholder='Photo URL' type="text" name="photo" id="" />

          </div>
          
        </div>
        <input className='btn btn-block bg-slate-300' type="submit" value="Update Coffee" />
      </form>

    </div>
    );
};

export default UpdateCoffee;