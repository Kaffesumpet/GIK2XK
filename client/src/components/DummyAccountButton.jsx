import { Button } from "@mui/material";
import { useDummyAccount } from "../contexts/DummyAccountContext";



function DummyAccountButton() {
  const { toggleUserId } = useDummyAccount();

  return (
    <Button variant="contained" onClick={toggleUserId}>
      Account
    </Button>
  );
}

export default DummyAccountButton;

/** Support component till mitt lilla fusk att simulera accounts */