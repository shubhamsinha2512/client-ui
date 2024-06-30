export function generateRandomColorArray(length) {
  const colors = [];
  const hexChars = "0123456789ABCDEF";

  for (let i = 0; i < length; i++) {
    let color = "#";
    // Generate a random hex color code of length 6 (excluding the '#')
    for (let j = 0; j < 6; j++) {
      color += hexChars[Math.floor(Math.random() * 16)];
    }
    colors.push(color);
  }

  return colors;
}
