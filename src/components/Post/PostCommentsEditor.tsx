import { StyledTextarea } from "./Post.style";

interface PostCommentsEditorProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const PostCommentsEditor = ({
  value,
  onChange,
  onKeyDown,
}: PostCommentsEditorProps) => {
  return (
    <StyledTextarea
      value={value}
      rows={3}
      placeholder="Добавить комментарий"
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
