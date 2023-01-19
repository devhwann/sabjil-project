export function Article4({data}) {
  const list=[];
  for(let i=0; i<data.length; i++){
    list.push(
      <div className="reply_list" key={data[i].id}>
        <div className="user_info">
          <img src="" className="user-image" alt="userImage"/>
          <div className="name_date">
            <h1>{data[i].name}</h1>
            <div className="write_date">{data[i].date}</div>
          </div>
        </div>
        <div className="reply_main">
            {data[i].comment}
        </div>
      </div>
    );
  }
  return (
    <article className="reply">
      <h2>Comments</h2>
        {list}
      <div className="reply_input">
        <input type="text" className="reply_name" placeholder="name" />
        <textarea className="reply_content" placeholder="content"></textarea>
        <button className="btn_write">Send</button>
      </div>
    </article>
  );
}
