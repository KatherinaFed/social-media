export const UserPage = (props) => {
  const { user } = props;

  return (
    <div>{user.name}</div>
  )
}