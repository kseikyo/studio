import { Flex, Box, Text } from "@livepeer/design-system";
import ReactGA from "react-ga";
import Router from "next/router";
import { useEffect } from "react";
import { NextSeo } from "next-seo";
import { hotjar } from "react-hotjar";
import GoogleTagManager from "components/GoogleTagManager";
import Footer from "components/Footer";
import Spinner from "components/Spinner";
import { useLoggedIn } from "hooks";
import Fade from "react-reveal/Fade";

if (process.env.NODE_ENV === "production") {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
} else {
  ReactGA.initialize("test", { testMode: true });
}

// Track client-side page views with Segment & HubSpot
if (process.env.NODE_ENV === "production") {
  Router.events.on("routeChangeComplete", (url) => {
    window.analytics.page();
    var _hsq = (window["hsq"] = window["hsq"] || []);
    _hsq.push(["setPath", url]);
    _hsq.push(["trackPageView"]);
  });
}

interface Props {
  title?: string;
  children?: JSX.Element[] | JSX.Element;
  description?: string;
  image?: any;
  url?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  preview?: boolean;
  theme?: string;
  navBackgroundColor?: string;
  css?: Record<string, any>;
  globalData?: any;
}

function Layout({
  title,
  description,
  children,
  image,
  url,
  canonical,
  noindex = process.env.NEXT_PUBLIC_SITE_URL !== "livepeer.studio",
  nofollow = process.env.NEXT_PUBLIC_SITE_URL !== "livepeer.studio",
  preview = false,
  css = {},
}: Props) {
  const isLoggedIn = useLoggedIn(false);

  useEffect(() => {
    if (window.location.hostname === "livepeer.studio") {
      ReactGA.pageview(window.location.pathname + window.location.search);
      hotjar.initialize(2525106, 6);
    }
  }, []);

  let seo = {
    title,
    description,
    noindex,
    nofollow,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image ? image.url : "https://assets.livepeer.studio/api/og",
          alt: image ? image.alt : "Livepeer Studio",
          width: 1200,
          height: 642,
        },
      ],
    },
  };

  if (canonical) {
    seo["canonical"] = canonical;
  }

  return (
    <>
      <NextSeo {...seo} />
      <GoogleTagManager />
      <Fade big when={isLoggedIn === false}>
        <Flex
          className="main"
          css={{
            flexGrow: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            zIndex: 1,
            position: "relative",
            ...css,
          }}>
          {preview && (
            <Box
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 24,
                fontSize: 12,
                fontWeight: 500,
                backgroundColor: "$blue9",
                color: "white",
                lineHeight: "32px",
              }}>
              Preview Mode
            </Box>
          )}

          {isLoggedIn || isLoggedIn === null ? (
            <Flex
              css={{
                height: "calc(100vh)",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Flex direction="column" align="center">
                <Text
                  size="8"
                  as="h1"
                  css={{
                    textTransform: "uppercase",
                    mb: "$5",
                    fontWeight: 700,
                    width: 150,
                    lineHeight: "30px",
                    textAlign: "center",
                  }}>
                  Livepeer Studio
                </Text>

                <Spinner />
              </Flex>
            </Flex>
          ) : (
            <>
              {children}
              <Flex
                align="center"
                justify="center"
                direction="column"
                css={{
                  width: "100%",
                  position: "relative",
                  mb: "$4",
                  "@bp1": {
                    mb: "$2",
                    width: "100%",
                    bottom: "$2",
                    position: "absolute",
                  },
                }}>
                <Box
                  css={{
                    background:
                      "linear-gradient(to right,transparent,rgba(255,255,255,0.1) 50%,transparent)",
                    width: "calc(100% - $6)",
                    mx: "auto",
                    height: "1px",
                    mb: "$4",
                    "@bp1": {
                      width: "100%",
                      maxWidth: 550,
                    },
                  }}
                />
                <Footer />
              </Flex>
            </>
          )}
        </Flex>
      </Fade>
    </>
  );
}

export default Layout;
