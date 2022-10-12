import { Button, Card, DataTable, Page } from "@shopify/polaris";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import "./App.css";
import { fetchData } from "./redux/actionCreator";


function App(props) {
  return (
    <Page>
      <Button onClick={() => props.fetchData()}>Fetch Data</Button>
      <Page>
        <Card>
          {
            JSON.stringify(props.data)
          }
        </Card>
      </Page>
    </Page>
  );
}

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
