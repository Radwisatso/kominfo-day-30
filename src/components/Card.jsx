export default function Card({
  name,
  username,
  email,
}) {
  let warna;
  if (username.length > 8) {
    warna = "blue";
  } else {
    warna = "red";
  }

  return (
    <div
      style={{
        borderColor: "black",
        border: "1px solid",
        maxWidth: "200px",
        margin: "10px",
        padding: "30px",
      }}
    >
      <h2>{name}</h2>
      <h3 style={{ color: warna }}>{username}</h3>
      {warna === "blue" && <p>{email}</p>}
    </div>
  );
}
