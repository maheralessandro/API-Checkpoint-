





function User({list}) {
    console.log(list);
  return (
   
      <tbody>
        <tr>
          <td>{list.id}</td>
          <td>{list.name}</td>
          <td>{list.email}</td>
          <td>{list.username}</td>
        </tr>
        
      </tbody>
    
  );
}

export default User;