export function handleInputChange(setter, type = "text") {
  return (e) => {
    const value = type === "number" ? Number(e.target.value) : e.target.value;
    setter(value);
  };
}
