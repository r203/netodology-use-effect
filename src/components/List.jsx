const List = ({ users, onChooseUser }) => {
  return (
    <ul>
      {users.map(user => {
        return (
          <li 
            key={user.id.toString()}
            onClick={() => onChooseUser(user)}>
            <div>{user.name}</div>
          </li>
        )
      })}
    </ul>
  )
}

export default List;