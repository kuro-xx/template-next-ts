import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { ColorOption, createStyles, VariantOption } from './createStyles';

type ButtonType = 'button' | 'submit';
type LinkType = 'link' | 'external-link';

type CommonProps = {
  children: React.ReactNode;
  variant?: VariantOption;
  color?: ColorOption;
};
type ButtonProps = CommonProps & {
  type: ButtonType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
type LinkProps = CommonProps & {
  type: LinkType;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};
type Props = ButtonProps | LinkProps;

export const MyButton = (props: Props) => {
  const { children, variant, color, type } = props;
  const theme = useTheme();
  const styles = createStyles(theme, color);

  if (type === 'link' || type === 'external-link') {
    const { href, onClick } = props;
    return (
      <Link href={href} passHref>
        <a
          css={[styles.root, styles.variant[variant ?? 'default']]}
          onClick={onClick}
          target={type === 'link' ? '_self' : '_blank'}
        >
          {children}
        </a>
      </Link>
    );
  }

  if (type === 'button' || type === 'submit') {
    const { onClick } = props;
    return (
      <button type={type} css={[styles.root, styles.variant[variant ?? 'default']]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return null;
};
