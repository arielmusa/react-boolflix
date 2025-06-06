import Card from "./Card";

export default function ResultSection({ data, sectionTitle }) {
  return (
    <section className="py-5">
      <div className="container">
        <h2>{sectionTitle}</h2>
        <div className="row">
          {data.map((content) => (
            <Card key={content.id} data={content} />
          ))}
        </div>
      </div>
    </section>
  );
}
