import React, { useEffect, useState } from 'react'
import googleImage from '../assets/googleImage.png'
import {Link, useLoaderData} from "react-router-dom"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Jobs = () => {
  const jobsData = useLoaderData()
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const handleSearch = (e) => {
      const term = e.target.value.toLowerCase();
      setSearchTerm(term);
      const filtered = jobsData.filter(job => 
          job.domain.toLowerCase().includes(term)
      );
      setFilteredJobs(filtered);
  }
console.log(jobsData)
  console.log("fuck coding")
  return (
   <>
      <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold mb-4">Job Search</h1>
              <input
                  type="text"
                  placeholder="Search by domain..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black bg-white mb-4"
              />
        </div>
      <div>
        <div>
            {filteredJobs.length > 0 ? (
                filteredJobs.map(job => {
                  return(
                    <div className='flex flex-row justify-center mb-5' key={job.id}>
                      <Card className='w-35 h-35 outline outline-2 outline-offset-2 ...'>
                        <CardActionArea>
                          <CardContent>
                              {/* <Avatar alt="Remy Sharp" className="w-100 h-100 basis-16"src={job.img} /> */}
                              <Avatar alt="Remy Sharp" className="w-70,h-70"src={googleImage} />
                              <Typography gutterBottom variant="h5" component="div">
                                  {job.title}
                              </Typography>
                              <Typography className='flex flex-col'>
                                <Typography>
                                  {job.domain}
                                </Typography>
                                <Typography>
                                  <LocationOnOutlinedIcon/>
                                  {job.Location}
                                </Typography>
                                <Typography>
                                  {job.Skills}
                                </Typography>
                              </Typography>
                              <Button variant="outlined" className='outline outline-offset-2 outline-black' href={job.Link} target="_blank">Link</Button>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                )
                })
            ) : (
                <p>No jobs found.</p>
            )}
          </div>
      </div>
   </>
  )
}
export default Jobs

export const jobsDataLoader = async () => {
  const res = await fetch("http://localhost:3000/jobs")
  console.log(res)
  return res.json()
}