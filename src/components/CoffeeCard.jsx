import { FaEye } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";




const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
            if (result.isConfirmed) {


                fetch(`https://coffee-shop-server-eo88ulseb-ahtesham-sajids-projects.vercel.app/coffee/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== id);
                            setCoffees(remaining);
                        }
                    })
            }
        })
    }
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    return (
        <div className="card bg-slate-200 shadow-xl ">
            <div className="flex p-12 ">
                <figure><img src={photo} alt="photo" /></figure>
                {/* <img src={photo} alt="" /> */}
                <div className="card-body">
                    <div className="flex justify-around">
                        <div>
                            <h2 className="card-title">Name: {name}</h2>
                            <p>{details}</p>
                        </div>
                        <div className="space-y-4 ">
                            <FaEye className="cursor-pointer"></FaEye>
                            <div>
                                <Link to={`/updatecoffee/${_id}`}>
                                    <AiFillEdit className="cursor-pointer"></AiFillEdit>
                                </Link>
                            </div>
                            <MdDeleteOutline onClick={() => handleDelete(_id)} className="cursor-pointer"></MdDeleteOutline>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;