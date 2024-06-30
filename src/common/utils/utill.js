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

export function isEmpty(data, zeroIsNotEmpty = false) {
  if (
    typeof data !== "object" &&
    (data === null ||
      data === "" ||
      data === undefined ||
      typeof data === "undefined")
  ) {
    return true;
  } else if (data === null) {
    return true;
  } else if (typeof data === "string" && data === "0" && !zeroIsNotEmpty) {
    return true;
  } else if (typeof data.length !== "undefined") {
    if (data.length > 0) {
      return false;
    } else {
      return true;
    }
  } else {
    if (Object.keys(data).length > 0) {
      return false;
    } else if (typeof data === "number" && (data !== 0 || zeroIsNotEmpty)) {
      return false;
    } else if (data instanceof Map && data.size > 0) {
      return false;
    } else {
      if (data === true) {
        return false;
      }
      return true;
    }
  }
}
