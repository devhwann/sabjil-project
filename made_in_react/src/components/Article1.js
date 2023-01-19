export function Article1({data}) {
  const list = [];
  for (let i = 0; i < data.length; i++) {
    list.push(
      <article id="study" key={data[i].id}>
        <h2>스터디</h2>
        <div className="pg pg-1">
          <h3>스터디를 참여한 이유?</h3>
          <p>{data[i].q1}</p>
        </div>
        <div className="pg pg-2">
          <h3>스터디에서 뭘 배웠나요?</h3>
          <p>{data[i].q2}</p>
        </div>
      </article>
    );
  }
  return (
    <>
      {list}
    </>
  );
}
