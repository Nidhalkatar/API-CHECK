const Users =({users})=>{
    return (
        <div className="N3">
          <h3>Coordonnes :</h3>
          <h4>{`Name : ${users.name}`}</h4>
          <h4>{`Username : ${users.username}`}</h4>
          <h4>{`Email : ${users.email}`}</h4>
          <div className="address">
            <h3>ADDRESS :</h3>
            <h4>{`Street : ${users.address.street}`}</h4>
            <h4>{`Suite : ${users.address.suite}`}</h4>
            <h4>{`City : ${users.address.city}`}</h4>
            <h4>{`ZipCode : ${users.address.zipcode}`}</h4>
          </div>
          <div className="geo">
            <h3>GEO :</h3>
            <h4>{`Lat : ${users.address.geo.lat}`}</h4>
            <h4>{`Lng : ${users.address.geo.lng}`}</h4>
          </div>
          <h4>{`Phone : ${users.phone}`}</h4>
          <h4>{`Website : ${users.website}`}</h4>
          <div className="company">
            <h3>COMPANY :</h3>
            <h4>{`Name : ${users.company.name}`}</h4>
            <h4>{`CatchPhrase : ${users.company.catchPhrase}`}</h4>
            <h4>{`BS : ${users.company.bs}`}</h4>
          </div>
        </div>
      );
    };
    export default Users;