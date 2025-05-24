import './App.css';
import employees from './data';

function App() {
  return (
    <div className="container">
      {employees.map((profile, index) => (
        <EmployeeCard
          key={index}
          profile={profile}
        
        />
      ))}
    </div>
  );
}

function EmployeeCard(props) {
  const {profileImage,name,role,description,technologies,title}=props.profile;
  return (
    <div className={`card ${title=="Senior Manager"? "Golden-Card":""}`}>
      <img className="profile-image" src={profileImage} alt={`${props.name}'s profile`} />
      <h2 className="name">{name}</h2>
      <p className="role">{role}</p>
      <p className='title'>{title}</p>
      <p className="description">{description}</p>
      <div className='technologies'>
        {technologies.map((tech, idx) => <span className="tech-badge" key={idx}>{tech}</span>)}
       </div> 

       
    </div>
  );
}




export default App;
