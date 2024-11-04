export default function ListButton({ item }: { item: object }) {
  return (
    <button className={"flex gap-2 mb-4"}>
      <img src={"/truss/" + item.id + ".jpg"} alt={ item.title } className={"rounded-lg"} />
      <div className={"text-left"}>
        <h2>{ item.title }</h2>
        <p>{ item.width }x29cm</p>
        <p>{ item.weight }kg</p>
      </div>
    </button>
  );
}
