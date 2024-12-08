const PictureStyle = {
  width: "100%",
  objectFit: "contain",
};

function Picture() {
  return (
    <img
      style={PictureStyle}
      src="https://www.skyechooks.com/wp-content/uploads/2024/05/How-to-care-for-a-long-tailed-lizard.png"
      alt="Lizard"
    />
  );
}

export default Picture;
