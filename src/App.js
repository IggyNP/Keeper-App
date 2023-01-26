import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import notes from "./notes";

const App = () => {
  return (
    <div>
      <Header />
      {notes.map((noteEntry) => (
        <Note
          key={noteEntry.key}
          title={noteEntry.title}
          content={noteEntry.content}
        />
      ))}
      <Footer />
    </div>
  );
};
export default App;
