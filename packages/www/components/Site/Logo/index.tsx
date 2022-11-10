import Link from "next/link";
import { Box, Flex, Link as A } from "@livepeer/design-system";

const Logo = ({ navBackgroundColor = "$hiContrast", badge = "" }) => {
  return (
    <Flex align="center">
      <Link href="/" passHref legacyBehavior>
        <A
          css={{
            textDecoration: "none",
            color:
              navBackgroundColor === "$hiContrast"
                ? "$loContrast"
                : "$hiContrast",
            cursor: "pointer",
            letterSpacing: "-.3px",
            fontSize: "16px",
            fontWeight: 700,
            width: 90,
            "@bp2": {
              width: 107,
            },
            "&:hover": {
              textDecoration: "none",
            },
          }}>
          <Box
            as="svg"
            width="inherit"
            height="38"
            viewBox="0 0 107 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 17.7022H11.6407V14.7181H3.43415V0H0V17.7022Z"
              fill="currentColor"
            />
            <path
              d="M13.0953 17.7022H16.5294V0H13.0953V17.7022Z"
              fill="currentColor"
            />
            <path
              d="M24.2845 17.7022H27.5924L34.0314 0H30.5468L25.9258 13.6054L21.3554 0H17.8455L24.2845 17.7022Z"
              fill="currentColor"
            />
            <path
              d="M35.365 17.7022H47.4603V14.7181H38.7992V9.83737H45.5159V6.85328H38.7992V2.9588H47.1825V0H35.365V17.7022Z"
              fill="currentColor"
            />
            <path
              d="M49.5212 17.7022H52.9554V10.7983H56.642C60.2277 10.7983 62.5255 8.67408 62.5255 5.41182C62.5255 2.12427 60.2277 0 56.642 0H49.5212V17.7022ZM52.9554 7.83955V2.9588H56.339C58.0561 2.9588 59.0914 3.8692 59.0914 5.41182C59.0914 6.92915 58.0561 7.83955 56.339 7.83955H52.9554Z"
              fill="currentColor"
            />
            <path
              d="M64.1694 17.7022H76.2647V14.7181H67.6036V9.83737H74.3204V6.85328H67.6036V2.9588H75.987V0H64.1694V17.7022Z"
              fill="currentColor"
            />
            <path
              d="M78.3004 17.7022H90.3957V14.7181H81.7346V9.83737H88.4514V6.85328H81.7346V2.9588H90.1179V0H78.3004V17.7022Z"
              fill="currentColor"
            />
            <path
              d="M106.875 17.7022L102.178 9.78679C103.921 8.92697 104.956 7.23262 104.956 5.2348C104.956 2.0484 102.709 0 99.2492 0H92.4314L92.4566 17.7022H95.8908V10.4443H98.6684L102.885 17.7022H106.875ZM95.8908 2.9588H98.7189C100.486 2.9588 101.497 3.81862 101.497 5.2348C101.497 6.65097 100.486 7.48551 98.7189 7.48551H95.8908V2.9588Z"
              fill="currentColor"
            />
            <path
              d="M6.81779 38C10.8075 38 13.4841 35.901 13.4841 32.7652C13.4841 25.5832 4.04017 27.9603 4.04017 24.7486C4.04017 23.5601 5.07547 22.8267 6.76729 22.8267C8.61062 22.8267 9.89842 23.9141 10.2519 25.6337L13.3326 24.3693C12.777 21.6887 10.1257 19.8932 6.76729 19.8932C3.28264 19.8932 0.631277 21.9163 0.631277 24.7486C0.631277 31.172 9.99943 29.0225 9.99943 32.8411C9.99943 34.1814 8.78738 35.0665 6.94405 35.0665C4.97446 35.0665 3.33314 33.625 3.05538 31.5008L0 32.4365C0.429268 35.6481 3.33314 38 6.81779 38Z"
              fill="currentColor"
            />
            <path
              d="M19.0338 37.7977H22.468V23.0543H27.7959V20.0955H13.7058V23.0543H19.0338V37.7977Z"
              fill="currentColor"
            />
            <path
              d="M36.2906 38C40.4318 38 43.2599 35.724 43.2599 31.3743V20.0955H40.053V31.3996C40.053 33.802 38.5127 34.9906 36.2906 34.9906C34.0938 34.9906 32.5534 33.802 32.5534 31.3996V20.0955H29.3213V31.3743C29.3213 35.724 32.1494 38 36.2906 38Z"
              fill="currentColor"
            />
            <path
              d="M46.0661 37.7977H51.8486C56.7221 37.7977 60.9138 34.8895 60.9138 28.9466C60.9138 23.0037 56.7221 20.0955 51.8486 20.0955H46.0661V37.7977ZM49.4498 34.8136V23.0543H51.5456C54.5758 23.0543 57.4291 24.6222 57.4291 28.9466C57.4291 33.271 54.5758 34.8136 51.5456 34.8136H49.4498Z"
              fill="currentColor"
            />
            <path
              d="M62.9589 37.7977H66.3931V20.0955H62.9589V37.7977Z"
              fill="currentColor"
            />
            <path
              d="M77.3803 38C82.5315 38 86.3192 34.1814 86.3192 28.9466C86.3192 23.7118 82.5315 19.8932 77.3803 19.8932C72.2038 19.8932 68.4162 23.7118 68.4162 28.9466C68.4162 34.1814 72.2038 38 77.3803 38ZM77.3803 35.0159C74.1734 35.0159 71.8756 32.4617 71.8756 28.9466C71.8756 25.4314 74.1734 22.852 77.3803 22.852C80.5872 22.852 82.8598 25.4314 82.8598 28.9466C82.8598 32.4617 80.5872 35.0159 77.3803 35.0159Z"
              fill="currentColor"
            />
          </Box>
        </A>
      </Link>
    </Flex>
  );
};

export default Logo;
