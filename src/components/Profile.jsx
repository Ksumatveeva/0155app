import styles from "./Profile.module.css"

export const Profile = (props) => {
    let user = props.function();

    return (
      <div className="row">
        <div className="col-md-4">
        <img 
        src={user.avatar}
         alt=""
         width="100%" 
         />
            </div>
        <div className="col-md-8">
            <h2 className={styles.id}>Id: <span>{user.id}</span></h2>
            <h2 className={styles.name}>Фамилия и имя: <span>{user.lastname} {user.name}</span></h2>
            <h2 className={styles.email}>Email: <span>{user.email}</span></h2>
            <p style={{fontWeight: 700}}>{user.about}</p>
        </div>
      </div>
    )
  };