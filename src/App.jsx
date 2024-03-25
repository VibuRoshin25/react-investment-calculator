import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/Result";
function App() {
  return (
    <>
      <Header />
      <div id="user-input">
        <Input label="Initial Investment" />
        <Input label="Annual Investment" />
        <Input label="Expected Return" />
        <Input label="Duration" />
      </div>
    </>
  );
}

export default App;
