window.function = async function(location) {
  const base64Encode = (str) => {
    try {
      return btoa(str).replace(/=+$/, '');
    } catch (e) {
      throw new Error("Base64 encoding failed");
    }
  };

  const generateUULE = (location) => {
    const encodedLocation = base64Encode(location);
    const uulePrefix = "w+CAIQIC";
    const uule = uulePrefix + encodedLocation;
    return uule;
  };

  try {
    const uule = generateUULE(location.value);
    return uule;
  } catch (error) {
    return `Error generating UULE: ${error.message}`;
  }
};