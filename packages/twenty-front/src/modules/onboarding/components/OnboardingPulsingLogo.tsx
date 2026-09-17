import { styled } from '@linaria/react';
import { themeCssVariables } from 'twenty-ui/theme-constants';

// Inline SVG instead of an image so the mark follows the active theme
// through currentColor and needs no background of its own.
const StyledLogo = styled.svg`
  color: ${themeCssVariables.font.color.primary};
  height: ${themeCssVariables.spacing[12]};
  margin-bottom: ${themeCssVariables.spacing[8]};
  overflow: visible;
  width: ${themeCssVariables.spacing[12]};

  .onboarding-logo-ring {
    animation: onboardingLogoSpin 1.6s linear infinite;
    transform-box: view-box;
    transform-origin: center;
  }

  .onboarding-logo-back {
    animation: onboardingLogoBack 1.6s ease-in-out infinite;
  }

  .onboarding-logo-front {
    animation: onboardingLogoFront 1.6s ease-in-out infinite;
  }

  .onboarding-logo-core {
    animation: onboardingLogoCore 1.6s ease-in-out infinite;
  }

  @keyframes onboardingLogoSpin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes onboardingLogoBack {
    50% {
      transform: translate(-1px, -1px);
    }
  }

  @keyframes onboardingLogoFront {
    50% {
      transform: translate(1px, 1px);
    }
  }

  @keyframes onboardingLogoCore {
    50% {
      opacity: 0.4;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .onboarding-logo-ring,
    .onboarding-logo-back,
    .onboarding-logo-front,
    .onboarding-logo-core {
      animation: none;
    }
  }
`;

export const OnboardingPulsingLogo = () => (
  <StyledLogo viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle
      className="onboarding-logo-ring"
      cx="24"
      cy="24"
      r="22"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="butt"
      strokeDasharray="104 34"
    />
    <g transform="translate(24 24) scale(1.2) translate(-16 -16)">
      <rect
        className="onboarding-logo-back"
        x="8.2"
        y="8.2"
        width="10.4"
        height="10.4"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      <rect
        className="onboarding-logo-front"
        x="13.4"
        y="13.4"
        width="10.4"
        height="10.4"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      <rect
        className="onboarding-logo-core"
        x="13.4"
        y="13.4"
        width="5.2"
        height="5.2"
        fill="currentColor"
      />
    </g>
  </StyledLogo>
);
