
import FullName from './profile/FullName';
import ProfilePhoto from './profile/ProfilePhoto';
import Bio from './profile/bio';
import Profession from './profile/Profession';


function App() {
  const layoutprofil= {display: "flex",}
  const myimg={with:"176",height:"209",marginTop:"3%"}
  const col2={ display: "block",marginLeft: '20%'}
  const bio={marginTop:"10%"}
    
  return (
  <div>
    <div style={layoutprofil}>

      <div style={myimg}>
        <ProfilePhoto >/myphoto.png</ProfilePhoto>
      </div>


      <div style={col2}>
        <FullName name="Omar" lastname="TOUMI"></FullName>
        
        <Profession profession="go my code"></Profession>
      </div>
   
    </div>
      <div style={bio}>
        <Bio knowledge="HTML, CSS, JavaScript, Java" expertisetest="UI/UX interface designing, market research, and troubleshooting complex issues" expscore="vqdv"></Bio>
    </div>

    

      

  </div>
   

  
          
        
 
  );
}

export default App;
