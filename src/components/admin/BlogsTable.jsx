'use client'
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const BlogsTable = () => {
  // Hardcoded data
    const [data , setData] = useState([]);

    const fetchData = async () => {
        const responce = await fetch('/api/blogs');
        const data = await responce.json();
        setData(data);  
    }

    useEffect(() => {
        fetchData();
    }, [])

  

  // Function to handle delete (you can expand this functionality based on your needs)
  const handleDelete = (id) => {
    
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            try {
                fetch('/api/blogs', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id }),
                });
                fetchData();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
            catch (error) {
                console.log(error);
            }
          
        }
      });


     
  };

  // Function to handle edit (you can expand this functionality based on your needs)
  const handleEdit = (id) => {
    
  };
  if(!data){
    return <h1>Loading...</h1>
  }
  return (
    <div className='mt-[50px]'>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Sr.</th>
            <th className="border border-gray-300 px-4 py-2">Blog Title</th>
            <th className="border border-gray-300 px-4 py-2">Delete Blog</th>
            <th className="border border-gray-300 px-4 py-2">Edit Blog</th>
            <th className="border border-gray-300 px-4 py-2">Views</th>
          </tr>
        </thead>
        <tbody>
          {data.map((blog, index) => (
            <tr key={blog._id} className="">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{blog.title}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(blog._id)}
                >
                  Delete
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => handleEdit(blog._id)}
                >
                  Edit
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-2 font-bold">{blog.views}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogsTable;
