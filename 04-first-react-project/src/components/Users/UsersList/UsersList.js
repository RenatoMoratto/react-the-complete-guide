import Card from '../../UI/Card/Card';

import style from './UsersList.module.css';

function UsersList(props) {
  return (
    <Card className={style.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default UsersList;
