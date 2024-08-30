import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DataUtama from "./DataUtama";
import ImageMenu1 from "../assets/transport.svg";
import ImageMenu2 from "../assets/dokumen.svg";
import ImageMenu3 from "../assets/komuditi.svg";
import ImageMenu4 from "../assets/layanan.svg";
import ImageMenu5 from "../assets/pemberitahuan.svg";
import DataEntitas from "./DataEntitas";
import DataPungutan from "./DataPungutan";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <div className="flex gap-10 justify-center">
        <div className="font-bold border-spacing-1 p-2">
          <img src={ImageMenu5} alt="ImageMenu1" width={70} />
          <p>Pemberitahuan</p>
        </div>
        <div className="p-2">
          <img src={ImageMenu1} alt="ImageMenu1" width={70} />
          <p>Transportasi</p>
        </div>
        <div className="p-2">
          <img src={ImageMenu2} alt="ImageMenu1" width={70} />
          <p>Transportasi</p>
        </div><div className="p-2">
          <img src={ImageMenu3} alt="ImageMenu1" width={70} />
          <p>Transportasi</p>
        </div><div className="p-2">
          <img src={ImageMenu4} alt="ImageMenu1" width={70} />
          <p>Transportasi</p>
        </div>
      </div>
      <h1 className="p-4 text-xl font-bold text-gray-700">Data Pemberitahuan</h1>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Data Utama" value="1" />
            <Tab label="Data Entitas" value="2" />
            <Tab label="Data Pungutan" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <DataUtama />
        </TabPanel>
        <TabPanel value="2">
          <DataEntitas />
        </TabPanel>
        <TabPanel value="3">
          <DataPungutan />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
