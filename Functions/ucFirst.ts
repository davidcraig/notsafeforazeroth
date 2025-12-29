const ucFirst = (str: string) => {
  // return string with first letter capitalised
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

export default ucFirst
