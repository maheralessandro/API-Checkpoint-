import User from "./User";


import Table from 'react-bootstrap/Table';

function UserList ({list}) {

    
  

    return(
        <>
         <Table striped bordered hover>
     
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>E MAIL</th>
          <th>Username</th>
        </tr>
      </thead>
        {list.map((element , index)=>{
            return <User list={element} key={index} />
        })}
        
        </Table>
        
        
        </>
    )
}

export default UserList ;