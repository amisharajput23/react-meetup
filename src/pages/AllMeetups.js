import MeetupList from '../Components/meetups/MeetupList';
import { useState , useEffect } from 'react';


function AllMeetUpsPage(){
const [isLoading,  setIsLoading]= useState(true);
const [loadedMeetups, setLoadedMeetups] = useState([]);
 useEffect(() => {
   setIsLoading(true);
  fetch(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  ).then( response => {
    return response.json();
  }).then(data => {
    const meetups =[];
    for(const key in data){
      
    }
       setIsLoading(false);
       setLoadedMeetups(data);
  });
 }, []);

if(isLoading){
  return(
    <section>
      <p>Loading...</p>
    </section>
  )
}


return(
    <section>
        <h1>All Meetups</h1>
        <ul>
            <MeetupList meetups={DUMMY_DATA}/>
        </ul>
    </section>
)
}

export default AllMeetUpsPage;