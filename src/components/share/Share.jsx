import "./share.css";
import { PermMedia } from "@material-ui/icons";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [image, setImage] = useState("");
  // useEffect(() => {
  //   setImage();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "fbClone");
    data.append("cloud_name", "dtpwobinz");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dtpwobinz/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const jsondata = await res.json();
      console.log(jsondata);
      const newPost = {
        userId: user._id,
        desc: desc.current.value,
        img: jsondata.url,
      };
      try {
        await fetch("/posts", {
          method: "POST",
          body: JSON.stringify(newPost),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.proflePicture
                ? user.proflePicture
                : PF + "person/noavatar.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            placeholder={"Whats on your mind " + user.username}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={handleSubmit}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareOptionIcon" />
              <span className="shareOptionText">upload Image</span>
              <input
                type="file"
                className="imageInput"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
