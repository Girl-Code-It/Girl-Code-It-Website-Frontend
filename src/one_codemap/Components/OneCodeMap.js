import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner.js";
import CodeMapMilestone from "./CodeMapMilestone";
import NotFound from "../../not_found/Components/NotFound";
//import styles from "../CSS/OneCodeMap.module.css";

const NOTFOUND = "Requested Resource Not Found";
const INTERNALSERVER = "Internal Server Error";
const SOMETHINGWENTWRONG = "Something went Wrong";

function getJsonFilename() {
  return new URLSearchParams(window.location.search).get("id");
}

export default function OneCodeMap() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        const resp__raw = await fetch(`/milestones/${getJsonFilename()}`);

        if (resp__raw.ok) {
          return setData(await resp__raw.json());
        } else {
          if (resp__raw.status === 404) {
            return setError(NOTFOUND);
          } else if (resp__raw.status === 500) {
            return setError(INTERNALSERVER);
          }
        }
      } catch (e) {
        return setError(SOMETHINGWENTWRONG);
      }
    })();
  }, []);

  return error ? (
    <NotFound />
  ) : (
    <>
      <Container>
        <Banner
          title={data && data.name}
          img={data && data.imgUrl}
          content={data && data.content}
          submit={data && data.submit}
          doubt={data && data.doubt}
        />
      </Container>

      {/* keep it out of Container*/}
      <CodeMapMilestone error={error} data={data} />
    </>
  );
}
