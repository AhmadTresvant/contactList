import React from "react";
import "./App.css";
import ContactList from "./ContactList";
import ContactRow from "./ContactRow";
import { useState } from "react";
import selectedContact from "./SelectedContact"

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? <div>Selected Contact View</div> : <ContactList setSelectedContactId={setSelectedContactId} />}
    </>
  );
}

export default App;
