import { TextField, Button, Box } from '@mui/material';
import { useState } from 'react';
function TagField({ onSave }) {
  const [tagString, setTagString] = useState('');
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <TextField
        sx={{ flex: 1 }}
        value={tagString}
        onChange={(e) => setTagString(e.target.value)}
        label="Taggar (ange flera separerade med kommatecken)"
        name="tags"
      />
      <Button
        color="success"
        variant="contained"
        onClick={() => onSave(tagString)}>
        Lägg till tagg(ar)
      </Button>
    </Box>
  );
}

export default TagField;
