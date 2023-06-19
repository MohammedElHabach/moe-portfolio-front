import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import ProjectCard from "../../Components/Project Card/ProjectCard";
import DataGridDemo from "./Table";
import { Edit } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { GridDeleteIcon, esES } from "@mui/x-data-grid";
import AlertDialog from "./Dialog";
import AddIcon from "@mui/icons-material/Add";
import { toast } from "react-toastify";

const DashboardProjects = () => {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [yesOrNo, setYesOrNo] = useState(false);
  const [btnForm, setBtnForm] = useState("");
  const [title, setTitle] = useState("");
  const [idd, setId] = useState();

  //Add Project States:
  const [projectName, setProjectName] = useState("");
  const [desc, setDesc] = useState("");
  const [techStack, setTechStack] = useState("");
  const [repoLink, setRepoLink] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [img, setImg] = useState(null);
  const [showAddProject, setShowAddProject] = useState(false); // Track whether to show the input fields or not
  const [yesOrNoAdd, setYesOrNoAdd] = useState(false);

  const token = localStorage.getItem("token");
  const notifyError = () => toast.error("Enter Required Fields");
  const notifyAdded = () => toast.success("Added Successfully");
  const notifyDeleted = () => toast.success("Deleted Successfully");

  const projectsURL = process.env.REACT_APP_URL + "/projects";

  const fetchProjects = async () => {
    try {
      const res = await axios.get(projectsURL);
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const columns = [
    {
      field: "projectName",
      headerName: "Project Name",
      width: 190,
      renderCell: (params) => {
        return params.row.name;
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 190,
      renderCell: (params) => {
        return (
          <Button
            // onClick={Edit(params.row.id)}
            variant="contained"
            color="primary"
            startIcon={<Edit />}
          >
            Edit
          </Button>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "red",
              "&:hover": {
                color: "white",
                backgroundColor: "red",
              },
            }}
            startIcon={<GridDeleteIcon />}
            onClick={() => {
              setOpen(true);
              // console.log("Delete button clicked");
              // console.log("params.id:", params.id);
              deleteProject(params.id);
            }}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  const getRowId = (row) => {
    return row._id;
  };

  useEffect(() => {
    if (yesOrNo) {
      deleteProject(idd);
    }
  }, [yesOrNo]);

  useEffect(() => {
    if (yesOrNoAdd) {
      addProject();
    }
  }, [yesOrNoAdd]);

  const deleteProject = async (id) => {
    // console.log("delete running");
    setId(id);
    setShowAddProject(false);
    setTitle("Are You Sure ?");
    setBtnForm("Delete");
    if (yesOrNo) {
      try {
        const res = await axios.delete(projectsURL + `/${idd}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(res);
        setYesOrNo(false);
        setOpen(false)
        notifyDeleted();
        fetchProjects();
      } catch (err) {
        console.error("Error in delete:", err);
      }
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  //ADD Project
  const addProject = async () => {
    // console.log("add running");
    setOpen(true)
    setBtnForm("Add");
    setTitle("Add Project");
    setShowAddProject(true);
    if (!yesOrNoAdd) {
      // Add button not pressed yet, no need to validate input
      return;
    }
    if (
      projectName.trim() === "" ||
      desc.trim() === "" ||
      techStack.trim() === "" ||
      repoLink.trim() === "" ||
      !img && yesOrNoAdd
    ) {
      notifyError();
      setOpen(true);
      // console.log("Invalid input");
      return;
    }
    const formData = new FormData();
    formData.append("name", projectName);
    formData.append("desc", desc);
    formData.append("techStack", techStack);
    formData.append("repoLink", repoLink);
    formData.append("demoLink", demoLink);
    formData.append("img", img);

    try {
      const res = await axios.post(projectsURL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(res);
      setYesOrNoAdd(false);
      notifyAdded();
      fetchProjects();
      setProjectName("");
      setDesc("");
      setDemoLink("");
      setRepoLink("");
      setTechStack("");
      setOpen(false)
    } catch (err) {
      console.error("Error in addProject:", err);
    }
  };

  const addProjectInputs = (
    <>
      {showAddProject && (
        <div
          className="addProject-container"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            required
            sx={{ marginBottom: "1rem" }}
            label="Project Name"
            variant="outlined"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <TextField
            required
            sx={{ marginBottom: "1rem" }}
            label="Description"
            variant="outlined"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <TextField
            required
            sx={{ marginBottom: "1rem" }}
            label="Tech Stack"
            variant="outlined"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
          />
          <TextField
            required
            sx={{ marginBottom: "1rem" }}
            label="Repo Link"
            variant="outlined"
            value={repoLink}
            onChange={(e) => setRepoLink(e.target.value)}
          />
          <TextField
            sx={{ marginBottom: "1rem" }}
            label="Demo Link"
            variant="outlined"
            value={demoLink}
            onChange={(e) => setDemoLink(e.target.value)}
          />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <label htmlFor="imageUpload">&nbsp;&nbsp;Image&nbsp;</label>

            <input
              required
              type="file"
              id="imageUpload"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <Button
        onClick={() => {
          // setOpen(true);
          addProject();
        }}
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
      >
        Add Project
      </Button>
      <DataGridDemo rows={projects} columns={columns} getRowId={getRowId} />
      <AlertDialog
        btnForm={btnForm}
        open={open}
        setOpen={setOpen}
        onClose={onClose}
        setYesOrNo={setYesOrNo}
        title={title}
        body={addProjectInputs}
        setYesOrNoAdd={setYesOrNoAdd}
        yesOrNo={yesOrNo}
        yesOrNoAdd={yesOrNoAdd}
        addProject={addProject}
      />
    </>
  );
};

export default DashboardProjects;
