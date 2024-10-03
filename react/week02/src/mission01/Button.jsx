export default function Button({ text, handleFunc }) {
  return (
    <button
      style={{
        width: "72px",
        height: "28px",
        marginLeft: "12px",

        textAlign: "center",

        border: "none",
        backgroundColor: "whitesmoke",
        cursor: "pointer",
      }}
      onClick={handleFunc}
    >
      {text}
    </button>
  );
}
