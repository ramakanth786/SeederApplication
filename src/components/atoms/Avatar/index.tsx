import React from "react";
import MuiAvatar from "@mui/material/Avatar";

interface AvatarProps{
  src?: string;
  alt?: string;
};

const Avatar = (props: AvatarProps) => {
  return (
    <>
      <MuiAvatar  {...props} />
    </>
  );
};

export default Avatar;
