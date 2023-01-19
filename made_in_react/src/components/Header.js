export function Header({data}) {
  return (
    <header>
      <div>
        <div>
          <img src="" className="userImage" alt="user-pic" />
          <h1>{data.userName}</h1>
          <p>{data.message}</p>
        </div>
      </div>
    </header>
  );
}
