export function Article2({data}) {
  const list = []
  for(let i=0; i<data.length; i++){
    list.push(
      <article id="collab" key={data[i].id}>
      <h2>협업 활동</h2>
      <div className="pg pg-3">
        <h3>스터디에서 어떤 활동을 했나요?</h3>
        <p>
          {data[i].q3}
        </p>
        <img src="./example.JPG" alt="example" className="example1" />
      </div>
    </article>
    )
  }
  return (
    <>
    {list}
    </>
  );
}
