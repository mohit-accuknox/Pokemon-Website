import "./App.css";
import Header from "./components/Header/Header";
import CardContainer from "./components/CardContainer/CardContainer";
import { useSearchContext } from "./components/SearchContext/SearchContext";
import SearchCardContainer from "./components/SearchCardContainer/SearchCardContainer";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from 'react-query';
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import {ReactQueryDevtools} from 'react-query/devtools'
import SearchLoadingSpinner from "./components/SearchLoading/SearchLoadingSpinner";

const queryClient = new QueryClient()

function App() {
  const { input } = useSearchContext();

  // const [inputvalue,setInputValue] = useState('');

  console.log(input);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        {input ? <SearchCardContainer /> : <CardContainer />}
      </div>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
    </QueryClientProvider>
  );
}

export default App;
