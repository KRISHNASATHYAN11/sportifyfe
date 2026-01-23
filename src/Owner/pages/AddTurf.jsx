import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Typography,
} from "@mui/material";
import OwnerSidebar from "../components/OwnerSidebar";
import toast from "react-hot-toast";
import { addTurf } from "../../services/AllApi";
import OwnerHeader from "../components/OwnerHeader";


const AddTurf = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const [preview, setPreview] = useState(
    "https://cdn-icons-png.flaticon.com/512/5611/5611963.png "
  );

  const [previewList, setPreviewList] = useState([]);

  const [turfData, setTurfData] = useState({
    turfName: "",
    location: "",
    description: "",
    sportsAvailability: "",
    maxPlayers: 0,
    pricePerHour: 0,
    openingTime: "",
    closingTime: "",
    isAvailable: "",
    imageURL: "",
    uploadedImages: [],
  });

  const handleUploadedImage = (e) => {
    setTurfData({
      ...turfData,
      uploadedImages: [...turfData.uploadedImages, e.target.files[0]],
    });
    setUploadedImage(e.target.value);
    setPreview(URL.createObjectURL(e.target.files[0]));

    if (previewList.length <= 2) {
      setPreviewList([...previewList, URL.createObjectURL(e.target.files[0])]);
    }
  };

  const onaddTurfClick = async () => {
    try {
      if (
        turfData.turfName == "" ||
        turfData.location == "" ||
        turfData.description == "" ||
        turfData.sportsAvailability == "" ||
        turfData.openingTime == "" ||
        turfData.closingTime == "" ||
        turfData.isAvailable == "" ||
        turfData.imageURL == "" ||
        turfData.maxPlayers <= 0 ||
        turfData.pricePerHour <= 0 ||
        turfData.uploadedImages.length === 0
      ) {
        toast.warning("Please Fill The Form");
      } else {
        // proceed api call
        // create a new formdata to handle file uploads.
        let reqBody = new FormData();
        for (let key in turfData) {
          // we need all keys except the key containing file (bcz logic is different for upload image, since it is array of files, we need to loop throught the array and get each files)
          if (key !== "uploadedImages") {
            // add each key and value to  reqbody, bracket notation is used
            reqBody.append(key, turfData[key]);
          } else {
            turfData.uploadedImages.forEach((eachFile) => {
              reqBody.append("uploadedImages", eachFile);
            });
          }
        }
        // get token for providing haeder
        let token = localStorage.getItem("token");

        let header = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        };

        let apiResponse = await addTurf(reqBody, header);
        console.log(apiResponse);
         if (apiResponse.status == 201) {
          toast.success("successfully added the Turf");
        } else {
          toast.error(apiResponse.response.data.message);
        }
      }
    } catch (error) {
      toast.error("Error Occurred while Adding Turf");
    }
  };

  return (
    <>
      <div className="grid grid-cols-[1fr_5fr]">
        <div>
          <OwnerSidebar />
        </div>
        <div >
            <OwnerHeader />
         <div className="bg-emerald-50 rounded-2xl mx-5">
           <Box
            sx={{
              mx: "auto",
              mt: 4,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box sx={{ mx: "auto", mt: 4,p:3 }}>
              <p  className="text-justify text-green-500"  gutterBottom>
                Add your turf details to reach more players and manage bookings efficiently .A complete turf profile with sports availability , pricing and timings improves visibility and attracts more customers.
              </p>

              <TextField
                onChange={(e) =>
                  setTurfData({ ...turfData, turfName: e.target.value })
                }
                fullWidth
                label="Turf Name"
                margin="normal"
              />

              <TextField
                onChange={(e) =>
                  setTurfData({ ...turfData, location: e.target.value })
                }
                fullWidth
                label="Location"
                margin="normal"
              />

              <TextField
                onChange={(e) =>
                  setTurfData({ ...turfData, description: e.target.value })
                }
                fullWidth
                label="Description"
                multiline
                rows={3}
                margin="normal"
              />


                <TextField
                onChange={(e) =>
                  setTurfData({ ...turfData, sportsAvailability: e.target.value })
                }
                fullWidth
                label="Sports Type"
                margin="normal"
              />

             

              <TextField
                onChange={(e) =>
                  setTurfData({ ...turfData, maxPlayers: e.target.value })
                }
                fullWidth
                type="number"
                label="Max Players"
                margin="normal"
              />

              <TextField
                onChange={(e) =>
                  setTurfData({ ...turfData, pricePerHour: e.target.value })
                }
                fullWidth
                type="number"
                label="Price Per Hour (₹)"
                margin="normal"
              />

              {/* Opening Time */}
              <TextField
                onChange={(e) =>
                  setTurfData({ ...turfData, openingTime: e.target.value })
                }
                fullWidth
                type="time"
                label="Opening Time"
                margin="normal"
              />

              <TextField
                onChange={(e) =>
                  setTurfData({ ...turfData, closingTime: e.target.value })
                }
                fullWidth
                type="time"
                label="Closing Time"
                margin="normal"
              
              />

              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Is Available
                </label>
                <select
                  onChange={(e) =>
                    setTurfData({ ...turfData, isAvailable: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option hidden value="">
                    Select Status
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Image URL */}
              <TextField
                onChange={(e) =>
                  setTurfData({ ...turfData, imageURL: e.target.value })
                }
                fullWidth
                label="Main Image URL"
                margin="normal"
              />

              {/* Upload Images */}
              {/* <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{ mt: 2 }}
              >
                Upload Turf Images
                <input hidden type="file" multiple />
              </Button> */}
              <div className="text-center">
                <label htmlFor="imgupload">
                  <img className="w-25" src={preview} alt="" />
                  <input
                    accept="image/*"
                    onChange={(e) => handleUploadedImage(e)}
                    hidden
                    type="file"
                    name=""
                    id="imgupload"
                  />
                </label>
                <div className="grid grid-cols-2 gap-1 mt-3">
                  {previewList.length > 0 &&
                    previewList.map((eachPreview) => (
                      <img className="w-50" src={eachPreview} />
                    ))}

                  {previewList.length > 0 && previewList.length <= 2 && (
                    <label htmlFor="imgup">
                      <img
                        className="w-25"
                        src="https://t3.ftcdn.net/jpg/07/66/16/34/360_F_766163454_FWF3w2m7xvVhd4DRlfT9Pj5mAVZdte4d.jpg"
                        alt=""
                      />
                      <input
                        accept="image/*"
                        onChange={(e) => handleUploadedImage(e)}
                        hidden
                        type="file"
                        name=""
                        id="imgup"
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-center items-center">
                <Button
                type="button"
                onClick={onaddTurfClick}
                variant="contained"
                color="success"
              
                sx={{ mt: 3 ,width:"50%" }}
              >
                Add Turf
              </Button>
              </div>
            </Box>
          </Box>
         </div>
        </div>
      </div>
    </>
  );
};

export default AddTurf;
