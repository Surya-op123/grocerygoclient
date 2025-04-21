import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import axios from 'axios';

export default function OurTeam() {
   const [teams, setTeams] = useState([]);

   useEffect(() => {
      const fetchTeams = async () => {
         try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/team`);
            setTeams(res.data);
            res.data.forEach(team => console.log(team.teamImage));
         } catch (error) {
            console.error('Error fetching teams:', error);
         }
      };
      fetchTeams();
   }, []);

   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item "><a className="text-dark fw-bold" href="/">Home</a> </li>
                        <li className="breadcrumb-item "><a className="text-primary fw-bold" href="">Our Team</a> </li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-5">
            <div className="blog-wrapper">
               <div className="container">
                  <h3 className="fw-bold fs-2 mb-4 truncate-2">Our Team</h3>
                  <div className="row g-3">

                     {teams.map((team) => (
                        <div key={team._id} className="col-xl-3 col-md-4 col-sm-6 d-flex">
                           <div className="review">
                              <img src={team.teamImage} className="img-circle img-responsive" />
                              <h4 className="title">{team.name}</h4>
                              <h6 className="fs-7">{team.designation}</h6>
                              <div className="d-flex gap-2">
                                 <a href={team.facebook} target="_blank"><div className="team-icon fac"><i className="fa-brands fa-facebook-f" /></div></a>
                                 <a href={team.youtube} target="_blank"><div className="team-icon twi"><i className="fa-brands fa-youtube" /></div></a>
                                 <a href={team.instagram} target="_blank"><div className="team-icon ins"><i className="fa-brands fa-instagram" /></div></a>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>
      </Layout>
   )
}
