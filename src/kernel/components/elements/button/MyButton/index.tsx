import { createStyles } from './createStyles';

type Props = {
  children: React.ReactNode;
};
export const MyButton = ({ children }: Props) => {
  const styles = createStyles();
  return <button css={styles.root}>{children}</button>;
};
