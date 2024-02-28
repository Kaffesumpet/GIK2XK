import { Button, TextField } from '@mui/material';
import { useState } from 'react';

function CommentForm({ onSave }) {
  const [comment, setComment] = useState({ title: '', body: '', userId: 1 });

  return (
    <form>
      <div>
        <TextField
          fullWidth
          value={comment.title}
          onChange={(e) => setComment({ ...comment, title: e.target.value })}
          label="Rubrik"
          name="title"
          id="title"
          margin="normal"
        />
      </div>
      <div>
        <TextField
          fullWidth
          multiline
          minRows={3}
          value={comment.body}
          onChange={(e) => setComment({ ...comment, body: e.target.value })}
          label="Innehåll"
          name="body"
          id="body"
        />
      </div>
      <Button onClick={() => onSave(comment)}>Skicka kommentar</Button>
    </form>
  );
}

export default CommentForm;
