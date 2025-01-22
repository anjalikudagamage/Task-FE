import { useState } from "react";

interface EditableTextProps {
  initialText: string;
}

const EditableText: React.FC<EditableTextProps> = ({ initialText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  return isEditing ? (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={() => setIsEditing(false)}
      autoFocus
    />
  ) : (
    <div onClick={() => setIsEditing(true)}>{text}</div>
  );
};

export default EditableText;
