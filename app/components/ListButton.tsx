export default function ListButton({ item }: { item: object }) {
  return (
    <button className={"flex"}>
      <img src={"/truss/" + item.id + ".jpg"} alt={ item.title } />
      <h2>{ item.title }</h2>
    </button>
  );
}
