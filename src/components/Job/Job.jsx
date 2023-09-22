import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";


const Job = ({job}) => {
    const {logo ,job_title,company_name,
        remote_or_onsite,location,job_type,salary } = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
         <figure><img src={logo} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            <div className=''>
                <button className='px-5 text-[#7E90FE] py-2 font-extrabold border rounded border-[#7E90FE] mr-4'>{remote_or_onsite}</button>
                <button className='px-5  text-[#7E90FE] py-2 font-extrabold border rounded border-[#7E90FE] mr-4'>{job_type}</button>
                
            </div>
            <div className='my-4 flex gap-4'>
                <h2 className='flex gap-2'><MdLocationOn className='text-2xl'></MdLocationOn>{location}</h2>
                <h2 className='flex gap-2'><AiFillDollarCircle className='text-2xl'></AiFillDollarCircle>{salary}</h2>

            </div>
            <div className="card-actions ">
            <button className="btn btn-primary">View Details</button>
            </div>
           </div>
        </div>
    );
};

export default Job;