import React, { useState } from "react";
import {
  PageBlock,
  Button,
  Alert,
  Spinner,
  Layout,
  PageHeader,
} from "vtex.styleguide";

import useCookieFortune from "./hooks/useCookieFortune";

import "./styles/global.css";

export default function CookieFortune() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    cookieFortunePhrase,
    luckyNumber,
    isLoading,
    isError,
    getCookieFortunePhrase,
  } = useCookieFortune();

  const handleClick = () => {
    getCookieFortunePhrase();
    setIsOpen(true);
  };

  const handleClickAgain = () => {
    getCookieFortunePhrase();
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="cookie-fortune-container">
          <Spinner />
        </div>
      );
    }

    if (cookieFortunePhrase) {
      return (
        <div className="tc cookie-fortune-container animated fadeIn">
          <h3 className="t-heading-3 fw5 cookie-fortune-phrase">
            {cookieFortunePhrase}
          </h3>
          <h5 className="t-heading-6 fw4 mt2 cookie-fortune-number">
            🍀{luckyNumber}
          </h5>
        </div>
      );
    }

    if (isError) {
      return (
        <Alert type="error" onClose={() => {}}>
          Error fetching your fortune. Please try again.
        </Alert>
      );
    }

    return null;
  };

  return (
    <Layout
      fullWidth
      pageHeader={
        <PageHeader title="Discover what fate has in store for you!"></PageHeader>
      }
    >
      <PageBlock variation="full">
        <div className="lucky-container">
          {renderContent()}

          {!isOpen ? (
            <Button onClick={handleClick} disabled={isLoading}>
              🥠 Open Fortune Cookie
            </Button>
          ) : (
            <div className="w-100 flex justify-center mt8">
              <Button
                disabled={isLoading}
                variation="secondary"
                size="small"
                onClick={handleClickAgain}
              >
                Try another fortune cookie
              </Button>
            </div>
          )}
        </div>
      </PageBlock>
    </Layout>
  );
}
