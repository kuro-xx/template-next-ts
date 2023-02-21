import { useTheme } from '@emotion/react';
import { theme } from '~/core/emotion/theme';
import { MyPlainImage } from '~/kernel/components/elements/image/MyPlainImage';
import { MyHeading } from '~/kernel/components/elements/typography/MyHeading';
import heroImage from './assets/images/picture-hero.jpg';
import { createStyles } from './createStyles';

export const MyHomeHeroView = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <section css={styles.root}>
      <div css={styles.content}>
        <header css={styles.header}>
          <MyHeading variant="h2">善良なる革命家を育てる</MyHeading>
        </header>
        <p>
          テクノロジーが日々進歩する中で、それを担う人材の需要も日増しに伸びています。
          <br />
          御業では、現代のテクノロジーに対応できる技術力を備えた人材の育成、
          <br />
          またテクノロジーを活用した開発事業の展開に取り組んでいます。
        </p>
      </div>
      <div css={styles.image}>
        <MyPlainImage src={heroImage} style={styles.img} />
      </div>
    </section>
  );
};
