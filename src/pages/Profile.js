import {React, useEffect} from 'react'
import Name from "../components/Name";
import Image from "../components/Image";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Skill from "../components/Skill";
import WorkExperience from "../components/WorkExperience";
import Additions from "../components/Additions";
import { useParams, useNavigate } from 'react-router-dom';

const Profile = ({data}) => {
    let { id } = useParams()
    // data = data[id]
    // useEffect(()=>{
    //     if(!data[id]){
    //         alert("NO DATA")
    //     }
    // }, [])    
    // const navigate = useNavigate()
    // console.log(data[id])
    // useEffect(()=>{
    //     if (!data[id]) {
    //         // If the ID does not exist, navigate to the homepage
    //         navigate('/')
    //         // Return null or a loading indicator while navigating
    //         return null
    //     }
    // },[])
    data = data[id]
    return (
        <div key={data.id} className="profile" id="profile-component">
            <div className="left">
                <Image image={data.image} />
                <Contact phone={data.contact.phone} email={data.contact.email} address={data.contact.address} linkedin={data.contact.linkedin} github={data.contact.github} />
                <Education grad={data.education.grad} undergrad={data.education.undergrad} />
                <Skill skill={data.skill} />
            </div>
            <div className="right">
                <Name name={data.name} code={data.code} />
                <Bio bio={data.bio} resume={data.resume} />
                <div id="experienceAndAdditions">
                    <WorkExperience experience={data.experience} />
                    <Additions additions={data.additions} />
                </div>
            </div>
            {/* <div className="page-number">
                <span>FROM URL: {id}</span>
            </div> */}
        </div>
    )
}

export default Profile