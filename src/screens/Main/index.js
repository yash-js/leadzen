import { Container, Typography } from "@mui/material";
import Row from "../../components/Row";
import InfiniteScroll from "react-infinite-scroll-component";
import { useHooks } from "./hooks";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Main = () => {
  const { fetchMore, people, isLoading, currentLength, hasMore } = useHooks();
  return (
    <>
      <Typography align="center" variant="h4" marginBottom={3} marginTop={5}>
        People
      </Typography>
      {/* <p>{total}</p> */}
      <Container style={{ overflow: "hidden", width: "40vw" }}>
        <InfiniteScroll
          dataLength={currentLength}
          next={fetchMore}
          hasMore={hasMore}
          height={"80vh"}
          loader={
            true && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <CircularProgress
                  style={{
                    height: "20px",
                    width: "20px",
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                />
              </div>
            )
          }
        >
          {people.map((details) => (
            <Typography key={details}>
              <Row details={details} />
            </Typography>
          ))}
        </InfiniteScroll>
      </Container>
    </>
  );
};

export default Main;
