import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Row({ details }) {
  return (
    <Accordion style={{ margin: "10px auto", width: "30vw" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "95%",
          }}
        >
          <Typography variant="p">{details?.name}</Typography>
          {/* <Typography variant="p">{details?.birth_year}</Typography> */}
          <Typography variant="p" textTransform={"capitalize"}>
            {details?.gender}
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <div>
            <Typography fontWeight={"bold"}>Birth Year</Typography>
            <Typography variant="p" extTransform={"capitalize"}>
              {details?.birth_year}
            </Typography>
          </div>
          <div>
            <Typography fontWeight={"bold"}>Height</Typography>
            <Typography variant="p" extTransform={"capitalize"}>
              {details?.height}
            </Typography>
          </div>
          <div>
            <Typography fontWeight={"bold"}>Mass</Typography>
            <Typography variant="p" extTransform={"capitalize"}>
              {details?.mass}
            </Typography>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
