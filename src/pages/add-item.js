import { storage } from "@/firebase/clientApp";
import { MainLayout } from "@/layouts/MainLayout";
import { saveItem } from "@/utils/FirebaseAPI";

import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import {
  MdFastfood,
  MdAttachMoney,
  MdDescription,
  MdCloudUpload,
  MdDelete,
} from "react-icons/md";

export default function AddItem() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [uploadImg, setUploadImg] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);

  // Upload Image
  const uploadImage = (e) => {
    if (uploadImg === null) {
      alert("Please select an image to upload");
      return;
    }
    try {
      const imageFile = uploadImg;
      const storageRef = ref(storage, `images/${Date.now()}-${imageFile.name}`);

      uploadBytesResumable(storageRef, imageFile).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadUrl) => {
          setImageAsset(downloadUrl);
          alert("Image uploaded successfully");
        });
      });
    } catch (e) {
      alert("An error occurred while uploading the image " + e.message);
      return;
    }
  };

  // Delete Image
  const deleteImage = () => {
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      alert("Image deleted successfully");
    });
  };

  //Handle Submit Items
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (
        name === "" ||
        description === "" ||
        price === "" ||
        imageAsset === null ||
        imageAsset === ""
      ) {
        alert("Please make sure all fields are not empty");
        return;
      }
      const data = {
        id: `${Date.now()}`,
        name: name,
        description: description,
        price: price,
        imgUrl: imageAsset,
        created_at: new Date().toLocaleDateString(),
      };
      saveItem(data);
      alert("Data Uploaded successfully");
      router.push("/");
    } catch (e) {
      alert("Error uploading the data: " + e.message);
    }
  };

  return (
    <MainLayout
      meta={{
        title: "Add Item | Canteena",
        description: "Honest store for honest people!",
      }}
    >
      <div className="w-[90%] md:w-[50%] border border-gray-300 shadow-md rounded-lg p-4 flex flex-col items-center justify-center gap-8">
        <h1 className="font-semibold text-3xl">Sell your item!</h1>

        {/* Product Name */}
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Write product name"
            className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400"
          />
        </div>

        {/* Product Details */}
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          {/* Description */}
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdDescription className="text-gray-700 text-2xl" />
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400"
            />
          </div>

          {/* Product Price */}
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdAttachMoney className="text-gray-700 text-2xl" />
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>
        {/* Product Image */}
        {!imageAsset ? (
          <>
            <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer gap-4">
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                <p className="text-gray-500 hover:text-gray-700">
                  Click here to upload
                </p>
              </div>
              <input
                type="file"
                name="uploadimage"
                accept="image/*"
                required
                onChange={(e) => setUploadImg(e.target.files[0])}
                className="w-0 h-0"
              />
              <button
                type="button"
                onClick={(e) => uploadImage(e)}
                className="ml-0  w-full md:w-auto border-none outline-none bg-indigo-400 px-12 py-2 rounded-lg text-sm text-white font-semibold"
              >
                Upload
              </button>
            </label>
          </>
        ) : (
          <>
            <div className="relative h-full">
              <img
                src={imageAsset}
                alt="uploaded image"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                onClick={deleteImage}
              >
                <MdDelete className="text-white" />
              </button>
            </div>
          </>
        )}
        <div className="flex items-center w-full">
          <button
            type="button"
            onClick={(e) => handleSubmit(e)}
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-blue-400 px-12 py-2 rounded-lg text-lg text-white font-semibold"
          >
            Save
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
