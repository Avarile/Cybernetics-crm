import { Text } from '@react-email/components';

import { emailTheme } from 'src/common-style';

// Text wordmark instead of an image until a hosted logo URL exists.
const logoStyle = {
  color: emailTheme.font.colors.highlighted,
  fontFamily: emailTheme.font.family,
  fontSize: emailTheme.font.size.lg,
  fontWeight: emailTheme.font.weight.bold,
  letterSpacing: '0.08em',
  lineHeight: emailTheme.font.lineHeight,
  margin: '0 0 40px',
  textTransform: 'uppercase' as const,
};

export const Logo = () => {
  return <Text style={logoStyle}>Cybernetics</Text>;
};
