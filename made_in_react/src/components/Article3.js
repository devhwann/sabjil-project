export function Article3({data}) {
  return (
    <article id="proj">
      <h2>프로젝트</h2>
      <div className="pg pg-4">
        <h3>프로젝트 역할</h3>
        <p>
          {data[0].q4}
        </p>
      </div>
    </article>
  );
}
