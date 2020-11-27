import { React } from "react";

export const renderAvatar = (name, photo, style) => {
  // {photo}
  // {name}

  if (photo) {
    return <img className={style.userAvatarImg} src={photo} alt={name} />;
  } else {
    let nameSplit = String(name)
      .toUpperCase()
      .split(/\.|,|__|_|-| /);
    // console.log('nameSplit: ', nameSplit);
    let initials;
    let colors = [
      "#1abc9c",
      "#2ecc71",
      "#3498db",
      "#9b59b6",
      "#34495e",
      "#16a085",
      "#27ae60",
      "#2980b9",
      "#8e44ad",
      "#2c3e50",
      "#f1c40f",
      "#e67e22",
      "#e74c3c",
      "#ecf0f1",
      "#95a5a6",
      "#f39c12",
      "#d35400",
      "#c0392b",
      "#bdc3c7",
      "#7f8c8d",
    ];
    if (nameSplit.length == 1) {
      initials = nameSplit[0] ? nameSplit[0].charAt(0) : "?";
    } else {
      initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
    }
    let charIndex = (initials == "?" ? 72 : initials.charCodeAt(0)) - 64;
    let colorIndex = charIndex % 20;
    return (
      <span
        className={style.userAvatarInitial}
        style={{ backgroundColor: colors[colorIndex - 1] }}
      >
        {initials}
      </span>
    );
  }
};
